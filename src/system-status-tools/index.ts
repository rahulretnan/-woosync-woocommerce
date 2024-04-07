import {
  RunSystemStatusToolByIdRequestType,
  SystemStatusTool,
  SystemStatusToolByIdRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class SystemStatusTools {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getById({
    id,
  }: SystemStatusToolByIdRequestType): Promise<SystemStatusTool> {
    const response = await this.client.get<SystemStatusTool>(
      `/system_status/tools/${id}`
    );
    return response.data;
  }

  async list(): Promise<{
    data: SystemStatusTool[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<SystemStatusTool[]>(
      '/system_status/tools'
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async run({
    id,
    data,
  }: RunSystemStatusToolByIdRequestType): Promise<SystemStatusTool> {
    const response = await this.client.put<SystemStatusTool>(
      `/system_status/tools/${id}`,
      data
    );
    return response.data;
  }
}
