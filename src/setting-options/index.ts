import {
  ListSettingOptionRequestType,
  SettingOption,
  SettingOptionBatchUpdateRequestType,
  SettingOptionBatchUpdateResponseType,
  SettingOptionByIdRequestType,
  UpdateSettingOptionRequestType,
} from './types';
import { AxiosInstance } from 'axios';

export default class SettingOptions {
  private readonly client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getById({
    group_id,
    option_id,
  }: SettingOptionByIdRequestType): Promise<SettingOption> {
    const response = await this.client.get<SettingOption>(
      `/settings/${group_id}/${option_id}`
    );
    return response.data;
  }

  async list({
    option_id,
  }: ListSettingOptionRequestType): Promise<{
    data: SettingOption[];
    count: number;
    totalPages: number;
  }> {
    const response = await this.client.get<SettingOption[]>(
      `/settings/${option_id}`
    );
    return {
      data: response.data,
      count: response.headers['x-wp-total'],
      totalPages: response.headers['x-wp-totalpages'],
    };
  }

  async updateById({
    group_id,
    option_id,
    data,
  }: UpdateSettingOptionRequestType): Promise<SettingOption> {
    const response = await this.client.put<SettingOption>(
      `/settings/${group_id}/${option_id}`,
      data
    );
    return response.data;
  }

  async batch({
    option_id,
    data,
  }: SettingOptionBatchUpdateRequestType): Promise<
    SettingOptionBatchUpdateResponseType
  > {
    const response = await this.client.post<
      SettingOptionBatchUpdateResponseType
    >(`/settings/${option_id}batch`, data);
    return response.data;
  }
}
