import {ID, Links} from '../types';

export declare type ReadOnlyProductTagDetails = {
    id: ID;
    count: number;
    _links: Links;
};

export declare type MutableProductTagDetails = {
    name: string;
    slug: string;
    description: string;
};

export declare type ProductTag = ReadOnlyProductTagDetails &
    MutableProductTagDetails;

export declare type ProductTagData = Partial<MutableProductTagDetails>;

export declare type ProductTagListParams = {
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
        | 'count';
    hide_empty?: boolean;
    product?: number;
    slug?: string;
};

export declare type CreateProductTagRequestType = ProductTagData;

export declare type ProductTagByIdRequestType = {
    id: ID;
};

export declare type ListProductTagRequestType = {
    params: ProductTagListParams;
};

export declare type UpdateProductTagRequestType = {
    id: ID;
    data: ProductTagData;
};

export declare type DeleteProductTagRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};

export declare type ProductTagBatchUpdateDataType = ProductTagData & {
    id: ID;
};

export declare type ProductTagBatchUpdateRequestType = {
    create?: CreateProductTagRequestType[];
    update?: ProductTagBatchUpdateDataType[];
    delete?: ID[];
};

export declare type ProductTagBatchUpdateResponseType = {
    create?: ProductTag[];
    update?: ProductTag[];
    delete?: ProductTag[];
};
