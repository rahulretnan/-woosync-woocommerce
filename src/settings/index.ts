import { Setting } from './types';
import { AxiosInstance } from 'axios';

export default class Settings {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async list(): Promise<{
    data: Setting[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<Setting[]>('settings');
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }
}
