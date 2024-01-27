import {Links} from '../types';

export declare type ReadOnlySettingOptionDetails = {
    id: string;
    label: string;
    description: string;
    default: any;
    tip: string;
    placeholder: string;
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
    options: Record<string, any>[];
    group_id: string;
    _links: Links;
};

export declare type MutableSettingOptionDetails = {
    value: any;
};

export declare type SettingOption = ReadOnlySettingOptionDetails &
    MutableSettingOptionDetails;

export declare type SettingOptionData = Partial<MutableSettingOptionDetails>;

export declare type SettingOptionByIdRequestType = {
    group_id: string;
    option_id: string;
};

export declare type ListSettingOptionRequestType = {
    option_id: string;
};

export declare type UpdateSettingOptionRequestType = {
    group_id: string;
    option_id: string;
    data: SettingOptionData;
};

export declare type SettingOptionBatchUpdateDataType = SettingOptionData & {
    id: string;
};

export declare type SettingOptionBatchUpdateRequestType = {
    option_id: string;
    data: {
        create?: SettingOptionData[];
        update?: SettingOptionBatchUpdateDataType[];
        delete?: string[];
    };
};

export declare type SettingOptionBatchUpdateResponseType = {
    create?: SettingOption[];
    update?: SettingOption[];
    delete?: SettingOption[];
};
