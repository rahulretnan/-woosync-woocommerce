import { ID } from '../types';

export declare type ReadOnlyProductShippingClassDetails = {
  id: ID;
  count: number;
};

export declare type MutableProductShippingClassDetails = {
  name: string;
  slug: string;
  description: string;
};

export declare type ProductShippingClass = ReadOnlyProductShippingClassDetails &
  MutableProductShippingClassDetails;

export declare type ProductShippingClassData = Partial<
  MutableProductShippingClassDetails
>;

export declare type ProductShippingClassListParams = {
  context?: 'view' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count'; // Options for sorting
  hide_empty?: boolean;
  product?: number;
  slug?: string;
};

export declare type CreateProductShippingClassRequestType = ProductShippingClassData;

export declare type ProductShippingClassByIdRequestType = {
  id: ID;
};

export declare type ListProductShippingClassRequestType = ProductShippingClassListParams;

export declare type UpdateProductShippingClassRequestType = {
  id: ID;
  data: ProductShippingClassData;
};

export declare type DeleteProductShippingClassRequestType = {
  id: ID;
  data: {
    force?: boolean;
  };
};

export declare type ProductShippingClassBatchUpdateDataType = ProductShippingClassData & {
  id: ID;
};

export declare type ProductShippingClassBatchUpdateRequestType = {
  create?: CreateProductShippingClassRequestType[];
  update?: ProductShippingClassBatchUpdateDataType[];
  delete?: ID[];
};

export declare type ProductShippingClassBatchUpdateResponseType = {
  create?: ProductShippingClass[];
  update?: ProductShippingClass[];
  delete?: ProductShippingClass[];
};
