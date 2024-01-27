import {ID, Links} from '../types';

export declare type ReadOnlyProductReviewDetails = {
    id: ID;
    date_created: string;
    date_created_gmt: string;
    _links: Links;
};

export declare type MutableProductReviewDetails = {
    product_id: number;
    status: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
    reviewer: string;
    reviewer_email: string;
    review: string;
    rating: number;
    verified: boolean;
};

export declare type ProductReview = ReadOnlyProductReviewDetails &
    MutableProductReviewDetails;

export declare type ProductReviewData = Partial<MutableProductReviewDetails>;

export declare type ProductReviewListParams = {
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
    orderby?: 'asc' | 'desc';
    reviewer?: number[];
    reviewer_exclude?: number[];
    reviewer_email?: string[];
    product?: number[];
    status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
};

export declare type CreateProductReviewRequestType = ProductReviewData;

export declare type ProductReviewByIdRequestType = {
    id: ID;
};

export declare type ListProductReviewRequestType = {
    params: ProductReviewListParams;
};

export declare type UpdateProductReviewRequestType = {
    id: ID;
    data: ProductReviewData;
};

export declare type DeleteProductReviewRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};

export declare type ProductReviewBatchUpdateDataType = ProductReviewData & {
    id: ID;
};

export declare type ProductReviewBatchUpdateRequestType = {
    create?: ProductReviewData[];
    update?: ProductReviewBatchUpdateDataType[];
    delete?: ID[];
};

export declare type ProductReviewBatchUpdateResponseType = {
    create?: ProductReview[];
    update?: ProductReview[];
    delete?: ProductReview[];
};
