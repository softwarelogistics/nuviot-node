import { ReplaySubject } from 'rxjs';
export declare class BreadcrumbServiceService {
    private _breadCrumbs;
    protected _breadCrumbsUpdated$: ReplaySubject<UI.BreadCrumb[]>;
    constructor();
    push(title: string, route: string[], icon?: string): void;
    pop(): void;
    reset(): void;
    get breadcrumbs(): UI.BreadCrumb[];
}
