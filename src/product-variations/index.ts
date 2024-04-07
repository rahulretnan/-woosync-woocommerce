import {
  CreateProductVariationRequestType,
  DeleteProductVariationRequestType,
  ListProductVariationRequestType,
  ProductVariation,
  ProductVariationBatchUpdateRequestType,
  ProductVariationBatchUpdateResponseType,
  ProductVariationByIdRequestType,
  UpdateProductVariationRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ProductVariations {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create({ product_id, data }: CreateProductVariationRequestType) {
    const response = await this.client.post<ProductVariation>(
      `products/${product_id}/variations`,
      data
    );
    return response.data;
  }

  async getById({ product_id, variation_id }: ProductVariationByIdRequestType) {
    const response = await this.client.get<ProductVariation>(
      `products/${product_id}/variations/${variation_id}`
    );
    return response.data;
  }

  async list({
    product_id,
    params,
  }: ListProductVariationRequestType): Promise<{
    data: ProductVariation[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ProductVariation[]>(
      `products/${product_id}/variations`,
      { params }
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({
    product_id,
    variation_id,
    data,
  }: UpdateProductVariationRequestType) {
    const response = await this.client.put<ProductVariation>(
      `products/${product_id}/variations/${variation_id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    product_id,
    variation_id,
    data: { force = true },
  }: DeleteProductVariationRequestType) {
    const response = await this.client.delete<ProductVariation>(
      `products/${product_id}/variations/${variation_id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }

  async batch(productId: number, data: ProductVariationBatchUpdateRequestType) {
    const response = await this.client.post<
      ProductVariationBatchUpdateResponseType
    >(`products/${productId}/variations/batch`, data);
    return response.data;
  }
}
