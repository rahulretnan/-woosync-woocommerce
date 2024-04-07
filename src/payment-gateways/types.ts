import {Links} from '../types';

export declare type ReadOnlyPaymentGatewaySettingDetails = {
    id: string;
    label: string;
    description: string;
    type:
        | 'text'
        | 'email'
        | 'number'
        | 'color'
        | 'password'
        | 'textarea'
        | 'select'
        | 'multiselect'
        | 'radio'
        | 'image_width'
        | 'checkbox';
    default: string;
    tip: string;
    placeholder: string;
};

export declare type MutablePaymentGatewaySettingDetails = {
    value: string;
};

export declare type PaymentGatewaySetting = ReadOnlyPaymentGatewaySettingDetails &
    MutablePaymentGatewaySettingDetails;

export declare type PaymentGatewaySettingData = Partial<
    MutablePaymentGatewaySettingDetails
>;

export declare type ReadOnlyPaymentGatewayDetails = {
    id: string;
    method_title: string;
    method_description: string;
    method_supports: string[];
    settings: PaymentGatewaySetting;
    _links: Links;
};

export declare type MutablePaymentGatewayDetails = {
    title: string;
    description: string;
    order: number;
    enabled: boolean;
    settings: PaymentGatewaySettingData;
};

export declare type PaymentGateway = ReadOnlyPaymentGatewayDetails &
    MutablePaymentGatewayDetails;

export declare type PaymentGatewayData = Partial<MutablePaymentGatewayDetails>;

export declare type PaymentGatewayByIdRequestType = {
    id: string;
};

export declare type UpdatePaymentGatewayRequestType = {
    id: string;
    data: PaymentGatewayData;
};
