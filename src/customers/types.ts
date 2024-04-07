import { DownloadLinks, File, ID, Links, MetaData } from '../types';

export declare type CustomerRole =
  | 'all'
  | 'administrator'
  | 'editor'
  | 'author'
  | 'contributor'
  | 'subscriber'
  | 'customer'
  | 'shop_manager';

declare type ReadOnlyCustomerDetails = {
  id: ID;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  is_paying_customer: boolean;
  avatar_url: string;
  role: CustomerRole;
  _links: Links;
};

declare type MutableCustomerDetails = {
  email: string;
};

export declare type CustomerBillingAddress = {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
};

export declare type CustomerShippingAddress = Omit<
  CustomerBillingAddress,
  'email' | 'phone'
>;

export declare type Customer = ReadOnlyCustomerDetails &
  MutableCustomerDetails & {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    billing: CustomerBillingAddress;
    shipping: CustomerShippingAddress;
    meta_data: MetaData[];
  };

export declare type CustomerData = Partial<
  MutableCustomerDetails & {
    meta_data: Omit<MetaData, 'id'>[];
  }
>;

export declare type CreateCustomerRequestType = CustomerData;

export declare type CustomerByIdRequestType = {
  id: ID;
};

export declare type ListCustomersRequestParams = {
  context?: 'view' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  email?: string;
  role?: CustomerRole;
};

export declare type UpdateCustomerRequestType = {
  id: ID;
  data: CustomerData;
};

export declare type DeleteCustomerRequestType = {
  id: ID;
  data: {
    force?: boolean;
    reassign?: ID;
  };
};

export declare type BatchUpdateCustomerDataType = CustomerData & {
  id: ID;
};

export declare type CustomerBatchUpdateRequestType = {
  create?: CreateCustomerRequestType[];
  update?: BatchUpdateCustomerDataType[];
  delete?: ID[];
};

export declare type CustomerBatchUpdateResponseType = {
  create?: Customer[];
  update?: Customer[];
  delete?: Customer[];
};

export declare type CustomerDownloadResponseType = {
  download_id: ID;
  download_url: string;
  product_id: ID;
  product_name: string;
  download_name: string;
  order_id: ID;
  order_key: string;
  downloads_remaining: number;
  access_expires: string;
  access_expires_gmt: string;
  file: File;
  _links: DownloadLinks;
};

export declare type CustomerDownloadRequestType = {
  id: ID;
};
