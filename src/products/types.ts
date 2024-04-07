import {ID, MetaData} from '../types';

export declare type ProductStatus = 'draft' | 'pending' | 'private' | 'publish';

export declare type CatalogVisibility =
    | 'visible'
    | 'catalog'
    | 'search'
    | 'hidden';

export declare type TaxStatus = 'taxable' | 'shipping' | 'none';

export declare type ProductType =
    | 'simple'
    | 'grouped'
    | 'external'
    | 'variable';

export declare type StockStatus = 'instock' | 'outofstock' | 'onbackorder';

export declare type ProductDefaultAttribute = {
    id: number;
    name: string;
    option: string;
};

export declare type ProductDimension = {
    length: string;
    width: string;
    height: string;
};

export declare type ProductDownload = {
    id: number;
    name: string;
    file: string;
};

declare type ProductCategory = {
    id: number;
    name: string;
    slug: string;
};

declare type ProductTag = {
    id: number;
    name: string;
    slug: string;
};

export declare type ProductImage = {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
};

export declare type ProductAttributes = {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
};

export declare type ReadOnlyProductDetails = {
    id: ID;
    permalink: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    price: string;
    price_html: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    backorders_allowed: boolean;
    backordered: boolean;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class_id: number;
    average_rating: string;
    rating_count: number;
    related_ids: number[];
    variations: number[];
};

export declare type MutableProductDetails = {
    name: string;
    slug: string;
    type: ProductType;
    status: ProductStatus;
    featured: boolean;
    catalog_visibility: CatalogVisibility;
    description: string;
    short_description: string;
    sku: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from: string;
    date_on_sale_from_gmt: string;
    date_on_sale_to: string;
    date_on_sale_to_gmt: string;
    virtual: boolean;
    downloadable: boolean;
    downloads: ProductDownload[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: TaxStatus;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    stock_status: StockStatus;
    backorders: string;
    sold_individually: boolean;
    weight: string;
    dimensions: ProductDimension;
    shipping_class: string;
    reviews_allowed: boolean;
    upsell_ids: number[];
    cross_sell_ids: number[];
    parent_id: number;
    purchase_note: string;
    categories: ProductCategory[];
    tags: ProductTag[];
    images: ProductImage[];
    attributes: ProductAttributes[];
    default_attributes: ProductDefaultAttribute[];
    grouped_products: number[];
    menu_order: number;
    meta_data: MetaData[];
};

export declare type Product = ReadOnlyProductDetails & MutableProductDetails;

export declare type ProductData = Partial<
    MutableProductDetails & {
    meta_data: Omit<MetaData, 'id'>[];
    categories: {
        id: ID;
    };
    tags: {
        id: ID;
    };
    images: Omit<
        ProductImage,
        | 'date_created'
        | 'date_created_gmt'
        | 'date_modified'
        | 'date_modified_gmt'
    >[];
}
>;

export declare type CreateProductRequestType = ProductData;

export declare type ProductByIdRequestType = {
    id: ID;
};

export declare type ListProductRequestParams = {
    context?: 'view' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    after?: string;
    before?: string;
    modified_after?: string;
    modified_before?: string;
    dates_are_gmt?: boolean;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?:
        | 'date'
        | 'id'
        | 'include'
        | 'title'
        | 'slug'
        | 'price'
        | 'popularity'
        | 'rating';
    category?: number;
    tag?: number;
    shipping_class?: string;
    attribute?: string;
    attribute_term?: string;
    tax_class?: string;
    on_sale?: boolean;
    min_price?: string;
    max_price?: string;
    stock_status?: StockStatus;
};

export declare type ListProductRequestType = ListProductRequestParams;


export declare type UpdateProductRequestType = {
    id: ID;
    data: ProductData;
};

export declare type DeleteProductRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};

export declare type BatchUpdateProductDataType = ProductData & {
    id: ID;
};

export declare type ProductBatchUpdateRequestType = {
    create?: CreateProductRequestType[];
    update?: BatchUpdateProductDataType[];
    delete?: ID[];
};

export declare type ProductBatchUpdateResponseType = {
    create?: Product[];
    update?: Product[];
    delete?: Product[];
};
