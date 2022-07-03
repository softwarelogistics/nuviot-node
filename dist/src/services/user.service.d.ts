/// <reference path="../models/user.d.ts" />
/// <reference path="../models/auth.d.ts" />
import { ActivatedRoute, Router } from '../core/utils';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '../core/utils';
import { ErrorReporterService } from './error-reporter.service';
import { NuviotClientService } from './nuviot-client.service';
import { NativeStorageService } from '../core/utils';
export declare class UserService {
    private http;
    private clientService;
    private errorReporter;
    private nativeStorage;
    private router;
    private _activatedRoute;
    paramOptions: any;
    queryParams: any;
    constructor(http: HttpClient, clientService: NuviotClientService, errorReporter: ErrorReporterService, nativeStorage: NativeStorageService, router: Router, _activatedRoute: ActivatedRoute);
    getIsLoggedIn(): Promise<boolean>;
    setIsLoggedIn(value: boolean): Promise<boolean>;
    private _users;
    private _org;
    protected _isLoggedIn$: ReplaySubject<boolean>;
    protected _org$: ReplaySubject<Users.Org>;
    protected _user$: ReplaySubject<Users.AppUser>;
    protected _users$: ReplaySubject<Core.ListResponse<Users.AppUserSummary>>;
    loadCurrentUser(): Promise<Users.AppUser>;
    loadCurrentUserIfNecessary(): Promise<Users.AppUser>;
    updateCoreInfo(coreUserInfo: Users.CoreUserInfo): Promise<void>;
    hasParams(): boolean;
    logout(): Promise<boolean>;
    getOrgsForCurrentUser(): Promise<Core.ListResponse<Users.OrgUser>>;
    acceptTermsAndConditions(): Promise<Core.InvokeResultEx<Users.AppUser>>;
    changeOrganization(orgId: string): Promise<boolean>;
    loadUser(id: string): Promise<Core.FormResult<Users.AppUser, Users.AppUserView>>;
    updateUser(user: Users.AppUser): Promise<Core.InvokeResult>;
    loadUsers(filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>>;
    loadActiveUsers(filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>>;
    getDistributionLists(filter: Core.ListFilter): Promise<Core.ListResponse<Users.DistroListSummary>>;
    auth(email: string, password: string): Promise<Core.InvokeResultEx<Auth.Response>>;
    login(email: string, password: string, rememberMe: boolean): Promise<Users.AppUser>;
    validateDeviceUser(user: Devices.DeviceUser): Core.ErrorMessage[];
    onLoggedIn(): Observable<boolean>;
    onUsers(): Observable<Core.ListResponse<Users.AppUserSummary>>;
    onUser(): Observable<Users.AppUser>;
    onOrg(): Observable<Users.Org>;
    getUsers(): Core.ListResponse<Users.AppUserSummary>;
    getOrg(): Promise<Users.Org>;
    getUser(): Promise<Users.AppUser>;
    setUser(user: Users.AppUser): Promise<boolean>;
    addMediaResourceForUser(userId: string, mediaResourceEH: {
        id: string;
        text: string;
        key: string;
    }): void;
    showWelcomeOnLogin(): Promise<void>;
    hideWelcomeOnLogin(): Promise<void>;
    setOrg(org: Users.Org): Promise<boolean>;
}
