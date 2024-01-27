import {
  CreateTaxRequestType,
  DeleteTaxRequestType,
  ListTaxRequestType,
  Tax,
  TaxBatchUpdateRequestType,
  TaxBatchUpdateResponseType,
  TaxByIdRequestType,
  UpdateTaxRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class Taxes {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateTaxRequestType) {
        const response = await this.client.post<Tax>('taxes', data);
        return response.data;
    }

    async getById({id}: TaxByIdRequestType) {
        const response = await this.client.get<Tax>(`taxes/${id}`);
        return response.data;
    }

    async list({params}: ListTaxRequestType) {
        const response = await this.client.get<Tax[]>('taxes', {
            params,
        });
        return response.data;
    }

    async updateById({id, data}: UpdateTaxRequestType) {
        const response = await this.client.put<Tax>(`taxes/${id}`, data);
        return response.data;
    }

    async deleteById({id, data: {force = true}}: DeleteTaxRequestType) {
        const response = await this.client.delete<Tax>(`taxes/${id}`, {
            data: {
                force,
            },
        });
        return response.data;
    }

    async batch(data: TaxBatchUpdateRequestType) {
        const response = await this.client.post<TaxBatchUpdateResponseType>(
            'taxes/batch',
            data
        );
        return response.data;
    }
}
