import {Links} from "../types";


export type ShippingMethod = {
    id: string;
    title: string;
    description: string;
    _links: Links;
};

export type ShippingMethodByIdRequestType = {
    id: string;
};
