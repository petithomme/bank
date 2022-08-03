import {
  AddTransfer,
  DeleteTransfer,
  UpdateTransfer,
} from './transfers.actions';
import { createReducer, on } from '@ngrx/store';
import { TransferModel } from '../../models/transfer.model';

export const initialState: TransferModel[] = [];

export const transfersReducer = createReducer(
  initialState,
  on(AddTransfer, (transfers, payload) => {
    const clone: TransferModel[] = JSON.parse(JSON.stringify(transfers));
    clone.push(payload);
    return clone;
  }),
  on(DeleteTransfer, (transfers, payload) => {
    return transfers.filter((transfer) => {
      return transfer.id !== payload.id;
    });
  }),
  on(UpdateTransfer, (transfers, payload) => {
    const clone: TransferModel[] = JSON.parse(JSON.stringify(transfers));
    clone.forEach((transfer) => {
      if (transfer.id === payload.id) {
        Object.assign(transfer, payload);
      }
    });
    return clone;
  })
);
