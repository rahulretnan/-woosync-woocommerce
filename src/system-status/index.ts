import { SystemStatus } from './types';
import { AxiosInstance } from 'axios';

export default class SystemStatuses {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async list(): Promise<{
    data: SystemStatus;
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<SystemStatus>('/system_status');
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }
}
