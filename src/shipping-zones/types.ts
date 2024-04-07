import {ID, Links} from '../types';

export declare type ReadOnlyShippingZoneDetails = {
    id: ID;
    _links: Links;
};

export declare type MutableShippingZoneDetails = {
    name: string;
    order: number;
};

export declare type ShippingZone = ReadOnlyShippingZoneDetails &
    MutableShippingZoneDetails;

export declare type ShippingZoneData = Partial<MutableShippingZoneDetails>;

export declare type CreateShippingZoneRequestType = ShippingZoneData;

export declare type ShippingZoneByIdRequestType = {
    id: ID;
};

export declare type ListShippingZoneRequestType = {};

export declare type UpdateShippingZoneRequestType = {
    id: ID;
    data: ShippingZoneData;
};

export declare type DeleteShippingZoneRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};
