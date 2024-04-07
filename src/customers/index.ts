import {
  CreateCustomerRequestType,
  Customer,
  CustomerBatchUpdateRequestType,
  CustomerBatchUpdateResponseType,
  CustomerByIdRequestType,
  CustomerDownloadRequestType,
  CustomerDownloadResponseType,
  DeleteCustomerRequestType,
  ListCustomersRequestParams,
  UpdateCustomerRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class Customers {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create(data: CreateCustomerRequestType) {
    const response = await this.client.post<Customer>('customers', data);
    return response.data;
  }

  async getById(
    id: CustomerByIdRequestType,
    params: ListCustomersRequestParams
  ) {
    const response = await this.client.get<Customer>(`customers/${id}`, {
      params,
    });
    return response.data;
  }

  async updateById({ id, data }: UpdateCustomerRequestType) {
    const response = await this.client.put<Customer>(`customers/${id}`, data);
    return response.data;
  }

  async deleteById({ id, data }: DeleteCustomerRequestType) {
    const response = await this.client.delete<Customer>(`customers/${id}`, {
      data,
    });
    return response.data;
  }

  async list(
    params?: ListCustomersRequestParams
  ): Promise<{
    data: Customer[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<Customer[]>('customers', { params });
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async batch(data: CustomerBatchUpdateRequestType) {
    const response = await this.client.post<CustomerBatchUpdateResponseType>(
      'customers/batch',
      data
    );
    return response.data;
  }

  async download({ id }: CustomerDownloadRequestType) {
    const response = await this.client.get<CustomerDownloadResponseType>(
      `customers/${id}/downloads`
    );
    return response.data;
  }
}
