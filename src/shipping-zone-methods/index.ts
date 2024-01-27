import {
  CreateShippingZoneMethodRequestType,
  DeleteShippingZoneMethodRequestType,
  ListShippingZoneMethodRequestType,
  ShippingZoneMethod,
  ShippingZoneMethodByIdRequestType,
  UpdateShippingZoneMethodRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class ShippingZoneMethods {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create({
                     zone_id,
                     data,
                 }: CreateShippingZoneMethodRequestType): Promise<ShippingZoneMethod> {
        const response = await this.client.post<ShippingZoneMethod>(
            `/shipping/zones/${zone_id}/methods`,
            data
        );
        return response.data;
    }

    async getById({
                      zone_id,
                      instance_id,
                  }: ShippingZoneMethodByIdRequestType): Promise<ShippingZoneMethod> {
        const response = await this.client.get<ShippingZoneMethod>(
            `/shipping/zones/${zone_id}/methods/${instance_id}`
        );
        return response.data;
    }

    async list({
                   zone_id,
               }: ListShippingZoneMethodRequestType): Promise<ShippingZoneMethod[]> {
        const response = await this.client.get<ShippingZoneMethod[]>(
            `/shipping/zones/${zone_id}/methods`
        );
        return response.data;
    }

    async update({
                     zone_id,
                     instance_id,
                     data,
                 }: UpdateShippingZoneMethodRequestType): Promise<ShippingZoneMethod> {
        const response = await this.client.put<ShippingZoneMethod>(
            `/shipping/zones/${zone_id}/methods/${instance_id}`,
            data
        );
        return response.data;
    }

    async delete({
                     zone_id,
                     instance_id,
                     data: {force = true},
                 }: DeleteShippingZoneMethodRequestType): Promise<ShippingZoneMethod> {
        const response = await this.client.delete<ShippingZoneMethod>(
            `/shipping/zones/${zone_id}/methods/${instance_id}`,
            {
                data: {
                    force,
                },
            }
        );
        return response.data;
    }
}
