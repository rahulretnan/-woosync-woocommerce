import {
  CreateProductShippingClassRequestType,
  DeleteProductShippingClassRequestType,
  ListProductShippingClassRequestType,
  ProductShippingClass,
  ProductShippingClassBatchUpdateRequestType,
  ProductShippingClassBatchUpdateResponseType,
  ProductShippingClassByIdRequestType,
  UpdateProductShippingClassRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ProductShippingClasses {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(data: CreateProductShippingClassRequestType) {
    const response = await this.client.post<ProductShippingClass>(
      'products/shipping_classes',
      data
    );
    return response.data;
  }

  async getById({ id }: ProductShippingClassByIdRequestType) {
    const response = await this.client.get<ProductShippingClass>(
      `products/shipping_classes/${id}`
    );
    return response.data;
  }

  async list(
    params?: ListProductShippingClassRequestType
  ): Promise<{
    data: ProductShippingClass[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ProductShippingClass[]>(
      'products/shipping_classes',
      { params }
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({ id, data }: UpdateProductShippingClassRequestType) {
    const response = await this.client.put<ProductShippingClass>(
      `products/shipping_classes/${id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    id,
    data: { force = true },
  }: DeleteProductShippingClassRequestType) {
    const response = await this.client.delete<ProductShippingClass>(
      `products/shipping_classes/${id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }

  async batch(data: ProductShippingClassBatchUpdateRequestType) {
    const response = await this.client.post<
      ProductShippingClassBatchUpdateResponseType
    >('products/shipping_classes/batch', data);
    return response.data;
  }
}
