import {Setting} from './types';
import {AxiosInstance} from 'axios';

export default class Settings {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async list() {
        const response = await this.client.get<Setting[]>('settings');
        return response.data;
    }
}
