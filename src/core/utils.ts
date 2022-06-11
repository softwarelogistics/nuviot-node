import { Observable } from "rxjs";
import fetch from 'node-fetch'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export class ActivatedRoute {
    snapshot: any;
};

export class Router {
    navigate(path: any[], params?:any) {

    }
};

export class HttpClient {
    async get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };

        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;}): Promise<T> {
       
        var result = await fetch(url);
        var json = await result.json();
        return json as T;
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

    delete<T>(url: string):Promise<T> {
        return null;
    }

    async post<T>(url: string, body: any | null, options?: {
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
    }): Promise<T> {
      
        var result = await fetch(url, {
            method:'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(result.status);

        var json = await result.json();
        return json as T;
    }
}


export class NativeStorage {
    public async getValue(key: string): Promise<string> {
        return await AsyncStorage.getItem(key)
    }

    public async setValue(key: string, value: string) {
        return await AsyncStorage.setItem(key,value);
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
    appId: "1C114B00D8014BD988BF61D74672F9D2",
    deviceId: 'mobileApp',
    appInstanceid:"",
    siteUri: 'https://api.nuviot.com'
   // siteUri: 'https://localhost:5001'
    //siteUri: 'http://dev.nuviot.com'
};

export class CookieService {
    get(name: string): string {
        return "";
    }

    set(name: string, value: string) {

    }
}