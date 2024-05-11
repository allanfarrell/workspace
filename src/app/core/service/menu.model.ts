export interface MenuItem {
    name: string;
    group: string;
    route: string;
}

export interface MenuGroup {
    name: string;
    items: MenuItem[];
}