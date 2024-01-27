import {RunSystemStatusToolByIdRequestType, SystemStatusTool, SystemStatusToolByIdRequestType,} from './types';
import {AxiosInstance} from 'axios';

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

    async list(): Promise<SystemStatusTool[]> {
        const response = await this.client.get<SystemStatusTool[]>(
            '/system_status/tools'
        );
        return response.data;
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
