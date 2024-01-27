import {ID, Links} from '../types';

export declare type ReadOnlyTaxDetails = {
    id: ID;
    _links: Links;
};

export declare type MutableTaxDetails = {
    country: string;
    state: string;
    /*
     * Postcode/ZIP, it doesn't support multiple values.
     * Deprecated as of WooCommerce 5.3, postcodes should be used instead.
     * @deprecated
     * @see postcodes
     */
    postcode?: string;
    /*
     * City name, it doesn't support multiple values.
     * Deprecated as of WooCommerce 5.3, cities should be used instead.
     * @deprecated
     * @see cities
     */
    city?: string;
    postcodes?: string[];
    cities?: string[];
    rate: string;
    name: string;
    priority?: number;
    compound?: boolean;
    shipping?: boolean;
    order?: number;
    class?: string;
};

export declare type Tax = ReadOnlyTaxDetails & MutableTaxDetails;

export declare type TaxData = Partial<MutableTaxDetails>;

export declare type TaxListParams = {
    context?: 'view' | 'edit';
    page?: number;
    per_page?: number;
    offset?: number;
    order?: 'asc' | 'desc';
    orderby?: 'asc' | 'desc';
    tax_class?: string;
};

export declare type CreateTaxRequestType = TaxData;

export declare type TaxByIdRequestType = {
    id: ID;
};

export declare type ListTaxRequestType = {
    params: TaxListParams;
};

export declare type UpdateTaxRequestType = {
    id: ID;
    data: TaxData;
};

export declare type DeleteTaxRequestType = {
    id: ID;
    data: {
        force?: boolean;
    };
};

export declare type TaxBatchUpdateDataType = TaxData & {
    id: ID;
};

export declare type TaxBatchUpdateRequestType = {
    create?: CreateTaxRequestType[];
    update?: TaxBatchUpdateDataType[];
    delete?: ID[];
};

export declare type TaxBatchUpdateResponseType = {
    create?: Tax[];
    update?: Tax[];
    delete?: Tax[];
};
