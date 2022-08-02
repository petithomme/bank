import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTransfer } from '../../actions/transfers/transfers.actions';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  public newTransfer: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addTransfer(): void {
    // this.store.dispatch(AddTransfer({ }));
    // this.newTransfer = '';
  }
}
