import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  public filterValue: string = '';

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {}

  addTransfer(): void {
    this.transferService.createTransfer();
  }
}
