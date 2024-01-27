export type ID = number;

export type MetaData = {
    id: ID;
    key: string;
    value: string;
};

export type File = {
    name: string;
    file: string;
};

type LinkBase = {
    collection: {
        href: string;
    }[];
};

export type Links = LinkBase & {
    self: {
        href: string;
    }[];
};

export type DownloadLinks = LinkBase & {
    products: {
        href: string;
    }[];
    order: {
        href: string;
    }[];
};

export type OrderNoteLinks = Links & {
    up: {
        href: string;
    }[];
};

export type RefundLinks = OrderNoteLinks;
export type ProductVariationLinks = OrderNoteLinks;
