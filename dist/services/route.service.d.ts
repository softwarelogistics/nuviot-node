import { NuviotClientService } from './nuviot-client.service';
import { Observable } from 'rxjs';
export declare class RouteService {
    private client;
    constructor(client: NuviotClientService);
    private currentRoute$;
    currentRoute: Routing.GeoRoute;
    private routes$;
    routes: Routing.GeoRouteSummary[];
    insertRoute(route: Routing.GeoRoute): Promise<Core.InvokeResult>;
    getNewRoute(): Promise<Routing.GeoRoute>;
    getNewWaypoint(): Promise<Routing.GeoWaypoint>;
    updateRoute(route: Routing.GeoRoute): Promise<Core.InvokeResult>;
    roundGeolocation(location: number): number;
    getRoute(id: string): Promise<Routing.GeoRoute>;
    deleteRoute(id: string): Promise<Core.InvokeResult>;
    getRoutes(): Promise<Core.ListResponse<Routing.GeoRouteSummary>>;
    onCurrentRoute(): Observable<Routing.GeoRoute>;
    onRoutes(): Observable<Routing.GeoRouteSummary[]>;
}
