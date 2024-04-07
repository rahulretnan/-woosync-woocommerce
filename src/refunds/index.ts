import {
  CreateRefundRequestType,
  DeleteRefundRequestType,
  ListRefundsRequestType,
  Refund,
  RefundByIdRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class Refunds {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create({ order_id, data }: CreateRefundRequestType) {
    const response = await this.client.post<Refund>(
      `orders/${order_id}/refunds`,
      data
    );
    return response.data;
  }

  async getById({ order_id, refund_id, params }: RefundByIdRequestType) {
    const response = await this.client.get<Refund>(
      `orders/${order_id}/refunds/${refund_id}`,
      { params }
    );
    return response.data;
  }

  async list({
    order_id,
    params,
  }: ListRefundsRequestType): Promise<{
    data: Refund[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<Refund[]>(
      `orders/${order_id}/refunds`,
      {
        params,
      }
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async deleteById({
    order_id,
    refund_id,
    data: { force = true },
  }: DeleteRefundRequestType) {
    const response = await this.client.delete<Refund>(
      `orders/${order_id}/refunds/${refund_id}`,
      {
        data: {
          force,
        },
      }
    );
    return response.data;
  }
}
