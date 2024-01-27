import {
  CreateOrderNoteRequestType,
  DeleteOrderNoteRequestType,
  ListOrderNotesRequestType,
  OrderNote,
  OrderNoteByIdRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class OrderNotes {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create({order_id, data}: CreateOrderNoteRequestType) {
        const response = await this.client.post<OrderNote>(
            `orders/${order_id}/notes`,
            data
        );
        return response.data;
    }

    async getById({order_id, note_id}: OrderNoteByIdRequestType) {
        const response = await this.client.get<OrderNote>(
            `orders/${order_id}/notes/${note_id}`
        );
        return response.data;
    }

    async list({order_id, params}: ListOrderNotesRequestType) {
        const response = await this.client.get<OrderNote[]>(
            `orders/${order_id}/notes`,
            {params}
        );
        return response.data;
    }

    async deleteById({
                         order_id,
                         note_id,
                         data: {force = true},
                     }: DeleteOrderNoteRequestType) {
        const response = await this.client.delete<OrderNote>(
            `orders/${order_id}/notes/${note_id}`,
            {
                data: {
                    force,
                },
            }
        );
        return response.data;
    }
}
