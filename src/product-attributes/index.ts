import {
    CreateProductAttributeRequestType,
    DeleteProductAttributeRequestType,
    ListProductAttributeRequestType,
    ProductAttribute,
    ProductAttributeBatchUpdateRequestType,
    ProductAttributeBatchUpdateResponseType,
    ProductAttributeByIdRequestType,
    UpdateProductAttributeRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class ProductAttributes {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateProductAttributeRequestType) {
        const response = await this.client.post<ProductAttribute>('products/attributes', data);
        return response.data;
    }

    async getById({id}: ProductAttributeByIdRequestType) {
        const response = await this.client.get<ProductAttribute>(`products/attributes/${id}`);
        return response.data;
    }

    async list({params}: ListProductAttributeRequestType) {
        const response = await this.client.get<ProductAttribute[]>('products/attributes', {params});
        return response.data;
    }

    async updateById({id, data}: UpdateProductAttributeRequestType) {
        const response = await this.client.put<ProductAttribute>(`products/attributes/${id}`, data);
        return response.data;
    }

    async deleteById({id, data}: DeleteProductAttributeRequestType) {
        const response = await this.client.delete<ProductAttribute>(`products/attributes/${id}`, {data});
        return response.data;
    }

    async batch(data: ProductAttributeBatchUpdateRequestType) {
        const response = await this.client.post<ProductAttributeBatchUpdateResponseType>('products/attributes/batch', data);
        return response.data;
    }
}
