import { Component, Input, OnInit } from '@angular/core';
import { TransferModel } from '../../models/transfer.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  @Input()
  public transfer: TransferModel = {
    accountHolder: '',
    iban: '',
    amount: '',
    date: '',
    note: '',
    id: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
