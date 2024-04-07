import {
  CreateProductAttributeTermRequestType,
  DeleteProductAttributeTermRequestType,
  ListProductAttributeTermRequestType,
  ProductAttributeTerm,
  ProductAttributeTermBatchUpdateRequestType,
  ProductAttributeTermBatchUpdateResponseType,
  ProductAttributeTermByIdRequestType,
  UpdateProductAttributeTermRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ProductAttributeTerms {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create({ attribute_id, data }: CreateProductAttributeTermRequestType) {
    const response = await this.client.post<ProductAttributeTerm>(
      `products/attributes/${attribute_id}/terms`,
      data
    );
    return response.data;
  }

  async getById({
    attribute_id,
    term_id,
  }: ProductAttributeTermByIdRequestType) {
    const response = await this.client.get<ProductAttributeTerm>(
      `products/attributes/${attribute_id}/terms/${term_id}`
    );
    return response.data;
  }

  async list({
    attribute_id,
    params,
  }: ListProductAttributeTermRequestType): Promise<{
    data: ProductAttributeTerm[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ProductAttributeTerm[]>(
      `products/attributes/${attribute_id}/terms`,
      { params }
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({
    attribute_id,
    term_id,
    data,
  }: UpdateProductAttributeTermRequestType) {
    const response = await this.client.put<ProductAttributeTerm>(
      `products/attributes/${attribute_id}/terms/${term_id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    attribute_id,
    term_id,
    data: { force = true },
  }: DeleteProductAttributeTermRequestType) {
    const response = await this.client.delete<ProductAttributeTerm>(
      `products/attributes/${attribute_id}/terms/${term_id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }

  async batch(data: ProductAttributeTermBatchUpdateRequestType) {
    const response = await this.client.post<
      ProductAttributeTermBatchUpdateResponseType
    >('products/attributes/terms/batch', data);
    return response.data;
  }
}
