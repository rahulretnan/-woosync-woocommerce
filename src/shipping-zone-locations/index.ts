import {
  ShippingZoneLocation,
  UpdateShippingZoneLocationRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ShippingZoneLocations {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async list(): Promise<{
    data: ShippingZoneLocation[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ShippingZoneLocation[]>(
      '/shipping/zones/locations'
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({
    shipping_zone_id,
    data,
  }: UpdateShippingZoneLocationRequestType): Promise<ShippingZoneLocation> {
    const response = await this.client.put<ShippingZoneLocation>(
      `/shipping/zones/${shipping_zone_id}/locations`,
      data
    );
    return response.data;
  }
}
