import {
  CreateProductCategoryRequestType,
  DeleteProductCategoryRequestType,
  ListProductCategoryRequestType,
  ProductCategory,
  ProductCategoryBatchUpdateRequestType,
  ProductCategoryBatchUpdateResponseType,
  ProductCategoryByIdRequestType,
  UpdateProductCategoryRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ProductCategories {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(data: CreateProductCategoryRequestType) {
    const response = await this.client.post<ProductCategory>(
      'products/categories',
      data
    );
    return response.data;
  }

  async getById({ id }: ProductCategoryByIdRequestType) {
    const response = await this.client.get<ProductCategory>(
      `products/categories/${id}`
    );
    return response.data;
  }

  async list(
    params?: ListProductCategoryRequestType
  ): Promise<{
    data: ProductCategory[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ProductCategory[]>(
      'products/categories',
      { params }
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({ id, data }: UpdateProductCategoryRequestType) {
    const response = await this.client.put<ProductCategory>(
      `products/categories/${id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    id,
    data: { force = true },
  }: DeleteProductCategoryRequestType) {
    const response = await this.client.delete<ProductCategory>(
      `products/categories/${id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }

  async batch(data: ProductCategoryBatchUpdateRequestType) {
    const response = await this.client.post<
      ProductCategoryBatchUpdateResponseType
    >('products/categories/batch', data);
    return response.data;
  }
}
