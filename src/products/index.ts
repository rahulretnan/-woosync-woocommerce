import {
  CreateProductRequestType,
  DeleteProductRequestType,
  ListProductRequestType,
  Product,
  ProductBatchUpdateRequestType,
  ProductBatchUpdateResponseType,
  ProductByIdRequestType,
  UpdateProductRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class Products {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateProductRequestType) {
        const response = await this.client.post<Product>('products', data);
        return response.data;
    }

    async getById({id}: ProductByIdRequestType) {
        const response = await this.client.get<Product>(`products/${id}`);
        return response.data;
    }

    async list({params}: ListProductRequestType) {
        const response = await this.client.get<Product[]>('products', {params});
        return response.data;
    }

    async updateById({id, data}: UpdateProductRequestType) {
        const response = await this.client.put<Product>(`products/${id}`, data);
        return response.data;
    }

    async deleteById({id, data: {force = false}}: DeleteProductRequestType) {
        const response = await this.client.delete<Product>(`products/${id}`, {
            data: {
                force,
            },
        });
        return response.data;
    }

    async batch(data: ProductBatchUpdateRequestType) {
        const response = await this.client.post<ProductBatchUpdateResponseType>(
            'products/batch',
            data
        );
        return response.data;
    }
}
