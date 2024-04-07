export type ShippingZoneLocation = {
    code: string;
    type: string;
};

export type UpdateShippingZoneLocationRequestType = {
    shipping_zone_id: string;
    data: ShippingZoneLocation;
};