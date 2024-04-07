import {SystemStatus} from './types';
import {AxiosInstance} from 'axios';

export default class SystemStatuses {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async list(): Promise<SystemStatus> {
        const response = await this.client.get<SystemStatus>('/system_status');
        return response.data;
    }
}
