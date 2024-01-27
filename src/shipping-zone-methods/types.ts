import {Links} from '../types';

export declare type ReadOnlyShippingZoneMethodDetails = {
    instance_id: number;
    title: string;
    method_id: string;
    method_title: string;
    method_description: string;
    settings: ShippingZoneMethodSetting[];
    _links: Links;
};

export declare type MutableShippingZoneMethodDetails = {
    order: number;
    enabled: boolean;
};

export declare type ShippingZoneMethod = ReadOnlyShippingZoneMethodDetails &
    MutableShippingZoneMethodDetails;

export declare type ShippingZoneMethodData = Partial<
    MutableShippingZoneMethodDetails & {
    settings: {
        value: string;
    };
}
>;

export declare type ShippingZoneMethodSetting = {
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
    value: string;
    default: string;
    tip: string;
    placeholder: string;
};

export declare type CreateShippingZoneMethodRequestType = {
    zone_id: number;
    data: ShippingZoneMethodData;
};

export declare type ShippingZoneMethodByIdRequestType = {
    zone_id: number;
    instance_id: number;
};

export declare type ListShippingZoneMethodRequestType = {
    zone_id: number;
};

export declare type UpdateShippingZoneMethodRequestType = {
    zone_id: number;
    instance_id: number;
    data: ShippingZoneMethodData;
};

export declare type DeleteShippingZoneMethodRequestType = {
    zone_id: number;
    instance_id: number;
    data: {
        force?: boolean;
    };
};
