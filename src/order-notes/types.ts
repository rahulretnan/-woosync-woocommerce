import { ID, OrderNoteLinks } from '../types';

export declare type Types = 'any' | 'customer' | 'internal';

declare type ReadOnlyOrderNoteDetails = {
  id: ID;
  author: string;
  date_created: string;
  date_created_gmt: string;
  _links: OrderNoteLinks;
};

declare type MutableOrderNoteDetails = {
  note: string;
};

export declare type OrderNote = ReadOnlyOrderNoteDetails &
  MutableOrderNoteDetails & {
    customer_note?: boolean;
    added_by_user?: boolean;
  };
export declare type OrderNoteData = Partial<MutableOrderNoteDetails>;

export declare type CreateOrderNoteRequestType = {
  order_id: ID;
  data: OrderNoteData;
};

export declare type OrderNoteByIdRequestType = {
  order_id: ID;
  note_id: ID;
};

export declare type ListOrderNotesRequestParams = {
  context?: 'view' | 'edit';
  type?: Types;
};

export declare type ListOrderNotesRequestType = {
  order_id: ID;
  params?: ListOrderNotesRequestParams;
};

export declare type DeleteOrderNoteRequestType = {
  order_id: ID;
  note_id: ID;
  data: {
    force?: boolean;
  };
};
