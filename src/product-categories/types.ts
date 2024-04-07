import { ID, Links } from '../types';

export declare type ProductCategoryImage = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
};

export declare type ReadOnlyProductCategoryDetails = {
  id: ID;
  count: number;
  _links: Links;
};

export declare type MutableProductCategoryDetails = {
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: 'default' | 'products' | 'subcategories' | 'both';
  image: ProductCategoryImage;
  menu_order: number;
};

export declare type ProductCategory = ReadOnlyProductCategoryDetails &
  MutableProductCategoryDetails;

export declare type ProductCategoryData = Partial<
  MutableProductCategoryDetails & {
    image: Omit<
      ProductCategoryImage,
      | 'date_created'
      | 'date_created_gmt'
      | 'date_modified'
      | 'date_modified_gmt'
    >;
  }
>;

export declare type ProductCategoryListParams = {
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

export declare type CreateProductCategoryRequestType = ProductCategoryData;

export declare type ProductCategoryByIdRequestType = {
  id: ID;
};

export declare type ListProductCategoryRequestType = ProductCategoryListParams;

export declare type UpdateProductCategoryRequestType = {
  id: ID;
  data: ProductCategoryData;
};

export declare type DeleteProductCategoryRequestType = {
  id: ID;
  data: {
    force?: boolean;
  };
};

export declare type ProductCategoryBatchUpdateDataType = ProductCategoryData & {
  id: ID;
};

export declare type ProductCategoryBatchUpdateRequestType = {
  create?: CreateProductCategoryRequestType[];
  update?: ProductCategoryBatchUpdateDataType[];
  delete?: ID[];
};

export declare type ProductCategoryBatchUpdateResponseType = {
  create?: ProductCategory[];
  update?: ProductCategory[];
  delete?: ProductCategory[];
};
