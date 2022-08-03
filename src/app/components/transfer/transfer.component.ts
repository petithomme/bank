import { Component, Input, OnInit } from '@angular/core';
import { TransferModel } from '../../models/transfer.model';
import { TransferService } from '../../services/transfer.service';

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
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {}

  delete(): void {
    let valid = confirm('Press a button!');
    if (valid) {
      this.transferService.deleteTransfer(this.transfer.id);
    }
  }

  edit(): void {
    this.transferService.editTransfer(this.transfer);
  }
}
