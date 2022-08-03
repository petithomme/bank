import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransferModel } from '../../models/transfer.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditDialogComponent>
  ) {}

  public accountHolder = '';
  public iban = '';
  public date = '';
  public note = '';
  public amount = '';
  public id = '';

  public accountError: Boolean = false;
  public noteError: Boolean = false;
  public dateError: Boolean = false;
  public ibanError: Boolean = false;
  public amountError: Boolean = false;

  ngOnInit(): void {
    if (this.data?.transfer) {
      this.accountHolder = this.data.transfer.accountHolder;
      this.iban = this.data.transfer.iban;
      this.date = this.data.transfer.date;
      this.note = this.data.transfer.note;
      this.amount = this.data.transfer.amount;
      this.id = this.data.transfer.id;
    }
  }

  validateAmount(): boolean {
    if (!this.amount) {
      return false;
    }
    let amountIsValid = false;
    const value = ('' + this.amount).replace('€', '');
    if (!isNaN(+value)) {
      amountIsValid = +value >= 50 && +value <= 20000;
    }

    const amountRegexp = new RegExp(
      '^(?=.*?\\d)^\\$?(([1-9]\\d{0,2}(,\\d{3})*)|\\d+)?(\\.\\d{1,2})?€'
    );

    return amountIsValid && amountRegexp.test(this.amount);
  }

  validate(): void {
    this.accountError = !this.accountHolder;
    this.amountError = !this.validateAmount();
    this.ibanError = !this.iban;
    this.noteError = !this.note;
    const date = new Date(this.date).getTime();
    this.dateError = !this.date || date < Date.now();

    if (
      !this.accountError &&
      !this.amountError &&
      !this.noteError &&
      !this.dateError &&
      !this.ibanError
    ) {
      this.dialogRef.close({
        accountHolder: this.accountHolder,
        iban: this.iban,
        amount: this.amount,
        date: this.date,
        note: this.note,
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(undefined);
  }
}
