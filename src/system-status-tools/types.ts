import {Links} from '../types';

export declare type SystemStatusTool = {
    id: string;
    name: string;
    action: string;
    description: string;
    success: boolean;
    message: string;
    confirm: boolean;
    _links: Links;
};

export declare type SystemStatusToolByIdRequestType = {
    id: string;
};

export declare type ListSystemStatusToolsRequestType = {};

export declare type RunSystemStatusToolByIdRequestType = {
    id: string;
    data: {
        success?: boolean;
        message?: string;
        confirm?: boolean;
    };
};
