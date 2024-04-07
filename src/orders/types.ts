import {ID, Links, MetaData} from '../types';

export declare type OrderStatus =
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'trash';

export declare type CurrencyCode =
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

declare type ReadOnlyOrderDetails = {
    id: ID;
    number: string;
    order_key: string;
    created_via: string;
    version: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    discount_total: string;
    discount_tax: string;
    shipping_total: string;
    shipping_tax: string;
    cart_tax: string;
    total: string;
    total_tax: string;
    prices_include_tax: boolean;
    customer_ip_address: string;
    customer_user_agent: string;
    date_paid: string;
    date_paid_gmt: string;
    date_completed: string;
    date_completed_gmt: string;
    cart_hash: string;
    tax_lines: OrderTax[];
    refunds: OrderRefund[];
    _links: Links;
};

declare type MutableOrderDetails = {
    set_paid: boolean;
};

declare type OrderBillingAddress = {
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

declare type OrderShippingAddress = Omit<
    OrderBillingAddress,
    'email' | 'phone'
>;

declare type OrderLineItem = {
    id: ID;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: OrderTax[];
    meta_data: MetaData[];
    sku: string;
    price: string;
};

declare type OrderTax = {
    id: ID;
    rate_code: string;
    rate_id: string;
    label: string;
    compound: boolean;
    tax_total: string;
    shipping_tax_total: string;
    meta_data: MetaData[];
};

declare type OrderShippingLine = {
    id: ID;
    method_title: string;
    method_id: string;
    total: string;
    total_tax: string;
    taxes: OrderTax[];
    meta_data: MetaData[];
};

declare type OrderFeeLine = {
    id: ID;
    name: string;
    tax_class: string;
    tax_status: 'taxable' | 'none';
    total: string;
    total_tax: string;
    taxes: OrderTax[];
    meta_data: MetaData[];
};

declare type OrderCouponLine = {
    id: ID;
    code: string;
    discount: string;
    discount_tax: string;
    meta_data: MetaData[];
};

declare type OrderRefund = {
    id: ID;
    reason: string;
    total: string;
};

export declare type Order = ReadOnlyOrderDetails &
    MutableOrderDetails & {
    parent_id: ID;
    status: OrderStatus;
    currency: CurrencyCode;
    customer_id: number;
    customer_note: string;
    billing: OrderBillingAddress;
    shipping: OrderShippingAddress;
    payment_method: string;
    payment_method_title: string;
    transaction_id: string;
    meta_data: MetaData[];
    line_items: OrderLineItem[];
    shipping_lines: OrderShippingLine[];
    fee_lines: OrderFeeLine[];
    coupon_lines: OrderCouponLine[];
};

export declare type OrderData = Partial<
    MutableOrderDetails & {
    meta_data: Omit<MetaData, 'id'>[];
    line_items: Omit<
        OrderLineItem,
        'id' | 'subtotal_tax' | 'total_tax' | 'sku' | 'price'
    > &
        {
            meta_data: Omit<MetaData, 'id'>[];
            taxes: {
                meta_data: Omit<MetaData, 'id'>[];
            };
        }[];
    tax_lines: {
        meta_data: Omit<MetaData, 'id'>[];
    };
    shipping_lines: Omit<OrderShippingLine, 'id' | 'total_tax'> &
        {
            meta_data: Omit<MetaData, 'id'>[];
            taxes: {
                meta_data: Omit<MetaData, 'id'>[];
            };
        }[];
    fee_lines: Omit<OrderFeeLine, 'id' | 'total_tax'> &
        {
            meta_data: Omit<MetaData, 'id'>[];
            taxes: {
                meta_data: Omit<MetaData, 'id'>[];
            };
        }[];
    coupon_lines: Omit<
        OrderCouponLine,
        'id' | 'discount' | 'discount_tax' | 'meta_data'
    > &
        {
            meta_data: Omit<MetaData, 'id'>[];
        }[];
}
>;

export declare type CreateOrderRequestType = OrderData;

export declare type OrderByIdRequestType = {
    id: ID;
    params: {
        dp?: string;
    };
};

export declare type ListOrdersRequestParams = {
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
    parent?: number[];
    parent_exclude?: number[];
    status?: OrderStatus | 'any';
    customer?: number;
    product?: number;
    dp?: number;
};

export declare type UpdateOrderRequestType = {
    id: ID;
    data: OrderData;
};

export declare type DeleteOrderRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};

export declare type BatchUpdateOrderDataType = OrderData & {
    id: ID;
};

export declare type OrderBatchUpdateRequestType = {
    create?: CreateOrderRequestType[];
    update?: BatchUpdateOrderDataType[];
    delete?: ID[];
};

export declare type OrderBatchUpdateResponseType = {
    create?: Order[];
    update?: Order[];
    delete?: Order[];
};
