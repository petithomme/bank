import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransferModel } from '../../models/transfer.model';

export const getAllTransfers = createSelector(
  createFeatureSelector('transfers'),
  (state: TransferModel[]) => {
    return state;
  }
);
