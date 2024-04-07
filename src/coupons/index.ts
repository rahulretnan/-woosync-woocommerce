import {
    Coupon,
    CouponBatchUpdateRequestType,
    CouponBatchUpdateResponseType,
    CouponByIdRequestType,
    CreateCouponRequestType,
    DeleteCouponRequestType,
    ListCouponsRequestParams,
    UpdateCouponRequestType,
} from './types';
import {AxiosInstance} from 'axios';

export default class Coupons {
    private readonly client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: CreateCouponRequestType) {
        const response = await this.client.post<Coupon>('coupons', data);
        return response.data;
    }

    async getById(id: CouponByIdRequestType, params: ListCouponsRequestParams) {
        const response = await this.client.get<Coupon>(`coupons/${id}`, {
            params,
        });
        return response.data;
    }

    async updateById({id, data}: UpdateCouponRequestType) {
        const response = await this.client.put<Coupon>(`coupons/${id}`, data);
        return response.data;
    }

    async deleteById({id, force}: DeleteCouponRequestType) {
        const response = await this.client.delete<Coupon>(`coupons/${id}`, {
            data: {force},
        });
        return response.data;
    }

    async list(params: ListCouponsRequestParams) {
        const response = await this.client.get<Coupon[]>('coupons', {params});
        return response.data;
    }

    async batch(data: CouponBatchUpdateRequestType) {
        const response = await this.client.post<CouponBatchUpdateResponseType>(
            'coupons/batch',
            data
        );
        return response.data;
    }
}
