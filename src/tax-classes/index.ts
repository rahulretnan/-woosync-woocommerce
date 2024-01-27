import {CreateTaxClassRequestType, DeleteTaxClassRequestType, TaxClass,} from './types';
import {AxiosInstance} from 'axios';

export default class TaxClasses {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateTaxClassRequestType) {
        const response = await this.client.post<TaxClass>('taxes/classes', data);
        return response.data;
    }

    async list() {
        const response = await this.client.get<TaxClass[]>('taxes/classes');
        return response.data;
    }

    async deleteBySlug({
                           slug,
                           data: {force = true},
                       }: DeleteTaxClassRequestType) {
        const response = await this.client.delete<TaxClass>(
            `taxes/classes/${slug}`,
            {
                data: {
                    force,
                },
            }
        );
        return response.data;
    }
}
