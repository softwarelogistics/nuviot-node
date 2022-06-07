export declare class BreadcrumbServiceService {
    private _breadCrumbs;
    protected _breadCrumbsUpdated$: any;
    constructor();
    push(title: string, route: string[], icon?: string): void;
    pop(): void;
    reset(): void;
    get breadcrumbs(): UI.BreadCrumb[];
}
