import {
  CreateShippingZoneRequestType,
  DeleteShippingZoneRequestType,
  ShippingZone,
  ShippingZoneByIdRequestType,
  UpdateShippingZoneRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class ShippingZones {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(data: CreateShippingZoneRequestType): Promise<ShippingZone> {
    const response = await this.client.post<ShippingZone>(
      '/shipping/zones',
      data
    );
    return response.data;
  }

  async getById({ id }: ShippingZoneByIdRequestType): Promise<ShippingZone> {
    const response = await this.client.get<ShippingZone>(
      `/shipping/zones/${id}`
    );
    return response.data;
  }

  async list(): Promise<{
    data: ShippingZone[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<ShippingZone[]>('/shipping/zones');
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({
    id,
    data,
  }: UpdateShippingZoneRequestType): Promise<ShippingZone> {
    const response = await this.client.put<ShippingZone>(
      `/shipping/zones/${id}`,
      data
    );
    return response.data;
  }

  async deleteById({
    id,
    data: { force = true },
  }: DeleteShippingZoneRequestType): Promise<ShippingZone> {
    const response = await this.client.delete<ShippingZone>(
      `/shipping/zones/${id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }
}
