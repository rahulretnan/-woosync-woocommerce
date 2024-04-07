import {
  CreateProductTagRequestType,
  DeleteProductTagRequestType,
  ListProductTagRequestType,
  ProductTag,
  ProductTagBatchUpdateRequestType,
  ProductTagBatchUpdateResponseType,
  ProductTagByIdRequestType,
  UpdateProductTagRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ProductTags {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(data: CreateProductTagRequestType) {
    const response = await this.client.post<ProductTag>('products/tags', data);
    return response.data;
  }

  async getById({ id }: ProductTagByIdRequestType) {
    const response = await this.client.get<ProductTag>(`products/tags/${id}`);
    return response.data;
  }

  async list(
    params?: ListProductTagRequestType
  ): Promise<{
    data: ProductTag[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ProductTag[]>('products/tags', {
      params,
    });
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({ id, data }: UpdateProductTagRequestType) {
    const response = await this.client.put<ProductTag>(
      `products/tags/${id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    id,
    data: { force = true },
  }: DeleteProductTagRequestType) {
    const response = await this.client.delete<ProductTag>(
      `products/tags/${id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }

  async batch(data: ProductTagBatchUpdateRequestType) {
    const response = await this.client.post<ProductTagBatchUpdateResponseType>(
      'products/tags/batch',
      data
    );
    return response.data;
  }
}
