import {ID, Links} from '../types';

export declare type Setting = {
    id: ID;
    label: string;
    description: string;
    parent_id: ID;
    sub_groups: string;
    _links: Links;
};
