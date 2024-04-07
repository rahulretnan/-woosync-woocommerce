import {PaymentGateway, PaymentGatewayByIdRequestType, UpdatePaymentGatewayRequestType,} from './types';
import {AxiosInstance} from 'axios';

export default class PaymentGateways {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getById({
                      id,
                  }: PaymentGatewayByIdRequestType): Promise<PaymentGateway> {
        const response = await this.client.get<PaymentGateway>(
            `/payment_gateways/${id}`
        );
        return response.data;
    }

    async list(): Promise<PaymentGateway[]> {
        const response = await this.client.get<PaymentGateway[]>(
            '/payment_gateways'
        );
        return response.data;
    }

    async updateById({
                         id,
                         data,
                     }: UpdatePaymentGatewayRequestType): Promise<PaymentGateway> {
        const response = await this.client.put<PaymentGateway>(
            `/payment_gateways/${id}`,
            data
        );
        return response.data;
    }
}
