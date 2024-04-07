import {ID, MetaData, RefundLinks} from '../types';

declare type ReadOnlyRefundDetails = {
  id: ID;
  date_created: string;
  date_created_gmt: string;
  refunded_payment: boolean;
  _links: RefundLinks;
};

declare type MutableRefundDetails = {
  amount: string;
  reason: string;
  refunded_by: number;
  api_refund: boolean;
  api_restock: boolean;
};

export declare type RefundLineItem = {
  id: ID;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: number;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: RefundLineItemTaxes[];
  meta_data: MetaData[];
  sku: string;
  price: string;
  refund_total: number;
};

export declare type RefundLineItemTaxes = {
  id: number;
  total: string;
  subtotal: string;
  refund_total: number;
};

export declare type Refund = ReadOnlyRefundDetails &
  MutableRefundDetails & {
    line_items: RefundLineItem[];
    meta_data: MetaData[];
  };

export declare type RefundData = Partial<
  MutableRefundDetails & {
    meta_data: Omit<MetaData, 'id'>[];
    line_items: Omit<
      RefundLineItem,
      'id' | 'subtotal_tax' | 'total_tax' | 'sku' | 'price'
    > &
      {
        meta_data: Omit<MetaData, 'id'>[];
        taxes: {
          refund_total: number;
        };
      }[];
  }
>;

export declare type CreateRefundRequestType = {
  order_id: ID;
  data: RefundData;
};

export declare type RefundByIdRequestType = {
  order_id: ID;
  refund_id: ID;
  params: {
    dp?: string;
  };
};

export declare type ListRefundsRequestParams = {
  context?: 'view' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  before?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug';
  parent?: number[];
  parent_exclude?: number[];
  dp?: number;
};

export declare type ListRefundsRequestType = {
  order_id: ID;
  params?: ListRefundsRequestParams;
};

export declare type DeleteRefundRequestType = {
  order_id: ID;
  refund_id: ID;
  data: {
    force?: boolean;
  };
};
