import { ShippingMethod, ShippingMethodByIdRequestType } from './types';
import { AxiosInstance } from 'axios';

export default class ShippingMethods {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getById({
    id,
  }: ShippingMethodByIdRequestType): Promise<ShippingMethod> {
    const response = await this.client.get<ShippingMethod>(
      `/shipping_methods/${id}`
    );
    return response.data;
  }

  async list(): Promise<{
    data: ShippingMethod[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ShippingMethod[]>(
      '/shipping_methods'
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }
}
