import {ID, Links, MetaData} from '../types';

export declare type DiscountType = 'percent' | 'fixed_cart' | 'fixed_product';

declare type ReadOnlyCouponDetails = {
    id: ID;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    usage_count: number;
    used_by: string[];
    _links: Links;
};

declare type MutableCouponDetails = {
    code: string;
};

export declare type Coupon = ReadOnlyCouponDetails &
    MutableCouponDetails & {
    amount: string;
    discount_type: DiscountType;
    description: string;
    date_expires: string;
    date_expires_gmt: string;
    individual_use: boolean;
    product_ids: number[];
    excluded_product_ids: number[];
    usage_limit: number;
    usage_limit_per_user: number;
    limit_usage_to_x_items: number;
    free_shipping: boolean;
    product_categories: number[];
    excluded_product_categories: number[];
    exclude_sale_items: boolean;
    minimum_amount: string;
    maximum_amount: string;
    email_restrictions: string[];
    meta_data: MetaData[];
};

export declare type CouponData = Partial<
    MutableCouponDetails & {
    meta_data: Omit<MetaData, 'id'>[];
}
>;

export declare type CreateCouponRequestType = CouponData;

export declare type CouponByIdRequestType = {
    id: ID;
};

export declare type ListCouponsRequestParams = {
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
    orderby?: 'date' | 'id' | 'include' | 'title' | 'slug';
    code?: string;
};

export declare type UpdateCouponRequestType = {
    id: ID;
    data: CouponData;
};

export declare type DeleteCouponRequestType = {
    id: ID;
    force?: boolean;
};

export declare type BatchUpdateCouponDataType = CouponData & {
    id: ID;
};

export declare type CouponBatchUpdateRequestType = {
    create?: CreateCouponRequestType[];
    update?: BatchUpdateCouponDataType[];
    delete?: ID[];
};

export declare type CouponBatchUpdateResponseType = {
    create?: Coupon[];
    update?: Coupon[];
    delete?: Coupon[];
};
