import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransferModel } from '../../models/transfer.model';
import { Observable } from 'rxjs';
import { getAllTransfers } from '../../actions/transfers/transfers.selectors';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css'],
})
export class TransfersComponent implements OnInit {
  transfers$: Observable<TransferModel[]>;
  displayedColumns: string[] = ['name', 'date', 'amount', 'iban', 'note'];

  constructor(private store: Store) {
    this.transfers$ = store.select(getAllTransfers);
  }

  ngOnInit(): void {}
}
