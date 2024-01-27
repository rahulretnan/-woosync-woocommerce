import {
  CreateOrderRequestType,
  DeleteOrderRequestType,
  ListOrdersRequestParams,
  Order,
  OrderBatchUpdateRequestType,
  OrderBatchUpdateResponseType,
  OrderByIdRequestType,
  UpdateOrderRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class Orders {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateOrderRequestType) {
        const response = await this.client.post<Order>('orders', data);
        return response.data;
    }

    async getById(id: OrderByIdRequestType) {
        const response = await this.client.get<Order>(`orders/${id.id}`, {
            params: id.params,
        });
        return response.data;
    }

    async updateById({id, data}: UpdateOrderRequestType) {
        const response = await this.client.put<Order>(`orders/${id}`, data);
        return response.data;
    }

    async deleteById({id, data}: DeleteOrderRequestType) {
        const response = await this.client.delete<Order>(`orders/${id}`, {
            data,
        });
        return response.data;
    }

    async list(params: ListOrdersRequestParams) {
        const response = await this.client.get<Order[]>('orders', {params});
        return response.data;
    }

    async batch(data: OrderBatchUpdateRequestType) {
        const response = await this.client.post<OrderBatchUpdateResponseType>(
            'orders/batch',
            data
        );
        return response.data;
    }
}
