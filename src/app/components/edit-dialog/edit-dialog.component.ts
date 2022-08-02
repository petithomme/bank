import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  constructor() {}

  public accountHolder = '';
  public iban = '';
  public date = '';
  public note = '';

  ngOnInit(): void {}
}
