import { Component } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'transfer-client';

  constructor(private transferService: TransferService) {
    transferService.getAllTransfers();
  }
}
