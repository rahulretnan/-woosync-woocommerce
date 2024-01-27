import {
  CreateProductReviewRequestType,
  DeleteProductReviewRequestType,
  ListProductReviewRequestType,
  ProductReview,
  ProductReviewBatchUpdateRequestType,
  ProductReviewBatchUpdateResponseType,
  ProductReviewByIdRequestType,
  UpdateProductReviewRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class ProductReviews {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateProductReviewRequestType) {
        const response = await this.client.post<ProductReview>(
            'product/reviews',
            data
        );
        return response.data;
    }

    async getById({id}: ProductReviewByIdRequestType) {
        const response = await this.client.get<ProductReview>(
            `product/reviews/${id}`
        );
        return response.data;
    }

    async list({params}: ListProductReviewRequestType) {
        const response = await this.client.get<ProductReview[]>('product/reviews', {
            params,
        });
        return response.data;
    }

    async updateById({id, data}: UpdateProductReviewRequestType) {
        const response = await this.client.put<ProductReview>(
            `product/reviews/${id}`,
            data
        );
        return response.data;
    }

    async deleteById({
                         id,
                         data: {force = true},
                     }: DeleteProductReviewRequestType) {
        const response = await this.client.delete<ProductReview>(
            `product/reviews/${id}`,
            {
                data: {
                    force,
                },
            }
        );
        return response.data;
    }

    async batch(data: ProductReviewBatchUpdateRequestType) {
        const response = await this.client.post<
            ProductReviewBatchUpdateResponseType
        >('product/reviews/batch', data);
        return response.data;
    }
}
