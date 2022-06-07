import { Observable } from "rxjs";

export class ActivatedRoute {
    snapshot: any;
};

export class Router {
    navigate(path: any[], params?:any) {

    }
};

export class HttpClient {
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
        withCredentials?: boolean;}): Observable<T> {
        return null;
    };

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
    }): Observable<T> {
        return null;
    };

    delete<T>(url: string):Observable<T> {
        return null;
    }

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
    }): Observable<T> {
        return null;
    }
}

export class HttpHeaders {
    set(key: string, value: string): HttpHeaders {
        return this;
    };
    append(key: string, value: string) {
        return this;
    }

}

export class HttpParams {
    set(key: string, value: string): HttpParams {
        return this;
    }
}

export const environment = {
    production: false,
    // siteUri: 'https://www.nuviot.com'
    siteUri: 'https://localhost:5001'
    //siteUri: 'http://dev.nuviot.com'
};

export class CookieService {
    get(name: string): string {
        return "";
    }

    set(name: string, value: string) {

    }
}