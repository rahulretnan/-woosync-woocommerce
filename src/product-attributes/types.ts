import { ID, Links } from '../types';

export declare type AttributeType = 'select';

export declare type AttributeSortOrder =
  | 'menu_order'
  | 'name'
  | 'name_num'
  | 'id';

export declare type ReadOnlyProductAttributeDetails = {
  id: ID;
  _links: Links;
};

export declare type MutableProductAttributeDetails = {
  name: string;
  slug: string;
  type: AttributeType;
  order_by: AttributeSortOrder;
  has_archives: boolean;
};

export declare type ProductAttribute = ReadOnlyProductAttributeDetails &
  MutableProductAttributeDetails;

export declare type ProductAttributeData = Partial<
  MutableProductAttributeDetails
>;

export declare type ProductAttributeListParams = {
  context?: 'view' | 'edit';
};

export declare type CreateProductAttributeRequestType = ProductAttributeData;

export declare type ProductAttributeByIdRequestType = {
  id: ID;
};

export declare type ListProductAttributeRequestType = ProductAttributeListParams;

export declare type UpdateProductAttributeRequestType = {
  id: ID;
  data: ProductAttributeData;
};

export declare type DeleteProductAttributeRequestType = {
  id: ID;
  data?: {
    force?: boolean;
  };
};

export declare type ProductAttributeBatchUpdateDataType = ProductAttributeData & {
  id: ID;
};

export declare type ProductAttributeBatchUpdateRequestType = {
  create?: CreateProductAttributeRequestType[];
  update?: ProductAttributeBatchUpdateDataType[];
  delete?: ID[];
};

export declare type ProductAttributeBatchUpdateResponseType = {
  create?: ProductAttribute[];
  update?: ProductAttribute[];
  delete?: ProductAttribute[];
};
