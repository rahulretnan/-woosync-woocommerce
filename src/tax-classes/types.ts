import {Links} from '../types';

export declare type ReadOnlyTaxClassDetails = {
    slug: string;
    _links: Links;
};

export declare type MutableTaxClassDetails = {
    name: string;
};

export declare type TaxClass = ReadOnlyTaxClassDetails & MutableTaxClassDetails;

export declare type TaxClassData = Partial<MutableTaxClassDetails>;

export declare type CreateTaxClassRequestType = TaxClassData;

export declare type DeleteTaxClassRequestType = {
    slug: string;
    data: {
        force?: boolean;
    };
};
