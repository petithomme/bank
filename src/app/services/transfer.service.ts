import { Store } from '@ngrx/store';
import axios from 'axios';
import { TransferModel } from '../models/transfer.model';
import { Injectable } from '@angular/core';
import {
  AddTransfer,
  DeleteTransfer,
  UpdateTransfer,
} from '../actions/transfers/transfers.actions';
import { v4 as uuidv4 } from 'uuid';
import { EditDialogComponent } from '../components/edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  baseURL: string = 'http://localhost:3000/transfer/';
  constructor(private store: Store, private dialog: MatDialog) {}

  public async getAllTransfers(): Promise<void> {
    const allTransfers = await axios.get(this.baseURL);
    allTransfers.data.map((transfer: TransferModel) => {
      this.store.dispatch(AddTransfer(transfer));
    });
  }

  private async addTransfer(payload: Partial<TransferModel>): Promise<void> {
    const result = await axios.post(this.baseURL, payload);
    if (result.status === 200) {
      this.store.dispatch(AddTransfer(result.data));
    } else {
      console.log('Error while adding a transfer');
    }
  }

  public async deleteTransfer(id: string): Promise<void> {
    const result = await axios.delete(`${this.baseURL}/${id}`);
    if (result.status === 200) {
      this.store.dispatch(DeleteTransfer({ id }));
    }
  }

  public createTransfer(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '535px',
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(async (editedTransfer: TransferModel) => {
      if (editedTransfer) {
        editedTransfer.id = uuidv4();
        this.addTransfer(editedTransfer);
      }
    });
  }

  public editTransfer(transfer: TransferModel): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '535px',
      width: '250px',
      data: { transfer },
    });

    dialogRef.afterClosed().subscribe(async (editedTransfer: TransferModel) => {
      if (editedTransfer) {
        editedTransfer.id = transfer.id;
        const result = await axios.put(
          `${this.baseURL}/${editedTransfer.id}`,
          editedTransfer
        );
        this.store.dispatch(UpdateTransfer(editedTransfer));
      }
    });
  }
}
