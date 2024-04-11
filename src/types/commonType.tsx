export interface LinkType {
    id: number;
    name: string;
    value: string;
    url?: string;
    icon?: string;
}

export interface MenuGroupType {
    group: string;
    menus: LinkType[];
}
