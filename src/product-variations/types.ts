import {ID, MetaData, ProductVariationLinks} from '../types';

export declare type VariationStatus =
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';

export declare type TaxStatus = 'taxable' | 'shipping' | 'none';

export declare type StockStatus = 'instock' | 'outofstock' | 'onbackorder';

export declare type ProductVariationDownload = {
    id: string;
    name: string;
    file: string;
};

export declare type ProductVariationDimensions = {
    length: string;
    width: string;
    height: string;
};

export declare type ProductVariationImage = {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
};

export declare type ProductVariationAttribute = {
    id: number;
    name: string;
    option: string;
};

export declare type ReadOnlyProductVariationDetails = {
    id: ID;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    permalink: string;
    price: string;
    on_sale: boolean;
    purchasable: boolean;
    backorders_allowed: boolean;
    backordered: boolean;
    shipping_class_id: string;
    _links: ProductVariationLinks;
};

export declare type MutableProductVariationDetails = {
    description: string;
    sku: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string;
    date_on_sale_from_gmt: string;
    date_on_sale_to: string;
    date_on_sale_to_gmt: string;
    status: VariationStatus;
    virtual: boolean;
    downloadable: boolean;
    downloads: ProductVariationDownload[];
    download_limit: number;
    download_expiry: number;
    tax_status: TaxStatus;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    stock_status: StockStatus;
    backorders: 'yes' | 'no' | 'notify';
    weight: string;
    dimensions: ProductVariationDimensions;
    shipping_class: string;
    image: ProductVariationImage;
    attributes: ProductVariationAttribute[];
    menu_order: number;
    meta_data: MetaData[];
};

export declare type ProductVariation = ReadOnlyProductVariationDetails &
    MutableProductVariationDetails;

export declare type ProductVariationData = Partial<
    MutableProductVariationDetails & {
    meta_data: Omit<MetaData, 'id'>[];
    image: Omit<
        ProductVariationImage,
        | 'date_created'
        | 'date_created_gmt'
        | 'date_modified'
        | 'date_modified_gmt'
    >[];
}
>;

export declare type CreateProductVariationRequestType = {
    product_id: ID;
    data: ProductVariationData;
};

export declare type ProductVariationByIdRequestType = {
    product_id: ID;
    variation_id: ID;
};

export declare type ProductVariationListParams = {
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
    slug?: string;
    status?: VariationStatus | 'any';
    sku?: string;
    tax_class?: string;
    on_sale?: boolean;
    min_price?: string;
    max_price?: string;
    stock_status?: StockStatus;
};

export declare type ListProductVariationRequestType = {
    product_id: ID;
    params: ProductVariationListParams;
};

export declare type UpdateProductVariationRequestType = {
    product_id: ID;
    variation_id: ID;
    data: ProductVariationData;
};

export declare type DeleteProductVariationRequestType = {
    product_id: ID;
    variation_id: ID;
    data: {
        force?: boolean;
    };
};

export declare type BatchUpdateProductVariationDataType = ProductVariationData & {
    id: ID;
};

export declare type ProductVariationBatchUpdateRequestType = {
    product_id: ID;
    create?: CreateProductVariationRequestType[];
    update?: BatchUpdateProductVariationDataType[];
    delete?: ID[];
};

export declare type ProductVariationBatchUpdateResponseType = {
    create?: ProductVariation[];
    update?: ProductVariation[];
    delete?: ProductVariation[];
};
