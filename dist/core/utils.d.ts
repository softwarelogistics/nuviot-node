import { Observable } from "rxjs";
export declare class ActivatedRoute {
    snapshot: any;
}
export declare class Router {
    navigate(path: any[], params?: any): void;
}
export declare class HttpClient {
    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    put<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    delete<T>(url: string): Observable<T>;
    post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
}
export declare class HttpHeaders {
    set(key: string, value: string): HttpHeaders;
    append(key: string, value: string): this;
}
export declare class HttpParams {
    set(key: string, value: string): HttpParams;
}
export declare const environment: {
    production: boolean;
    siteUri: string;
};
export declare class CookieService {
    get(name: string): string;
    set(name: string, value: string): void;
}
