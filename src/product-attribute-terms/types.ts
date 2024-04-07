import { ID, Links } from '../types';

export declare type ReadOnlyProductAttributeTermDetails = {
  id: ID;
  count: number;
  _links: Links;
};

export declare type MutableProductAttributeTermDetails = {
  name: string;
  slug: string;
  description: string;
  menu_order: number;
};

export declare type ProductAttributeTerm = ReadOnlyProductAttributeTermDetails &
  MutableProductAttributeTermDetails;

export declare type ProductAttributeTermData = Partial<
  MutableProductAttributeTermDetails
>;

export declare type ProductAttributeTermListParams = {
  context?: 'view' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  order?: 'asc' | 'desc';
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  hide_empty?: boolean;
  parent?: number;
  product?: number;
  slug?: string;
};

export declare type CreateProductAttributeTermRequestType = {
  attribute_id: ID;
  data: ProductAttributeTermData;
};

export declare type ProductAttributeTermByIdRequestType = {
  attribute_id: ID;
  term_id: ID;
};

export declare type ListProductAttributeTermRequestType = {
  attribute_id: ID;
  params?: ProductAttributeTermListParams;
};

export declare type UpdateProductAttributeTermRequestType = {
  attribute_id: ID;
  term_id: ID;
  data: ProductAttributeTermData;
};

export declare type DeleteProductAttributeTermRequestType = {
  attribute_id: ID;
  term_id: ID;
  data: {
    force?: boolean;
  };
};

export declare type ProductAttributeTermBatchUpdateDataType = ProductAttributeTermData & {
  id: ID;
};

export declare type ProductAttributeTermBatchUpdateRequestType = {
  create?: CreateProductAttributeTermRequestType[];
  update?: ProductAttributeTermBatchUpdateDataType[];
  delete?: ID[];
};

export declare type ProductAttributeTermBatchUpdateResponseType = {
  create?: ProductAttributeTerm[];
  update?: ProductAttributeTerm[];
  delete?: ProductAttributeTerm[];
};
