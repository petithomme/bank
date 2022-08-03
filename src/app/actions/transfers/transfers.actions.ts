import { TransferModel } from '../../models/transfer.model';
import { createAction, props } from '@ngrx/store';

export const AddTransfer = createAction('Add transfer', props<TransferModel>());
export const DeleteTransfer = createAction(
  'Delete transfer',
  props<{ id: string }>()
);
export const UpdateTransfer = createAction(
  'Update transfer',
  props<TransferModel>()
);
