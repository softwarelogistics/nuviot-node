/// <reference path="../models/user.ts" />

import { environment, NativeStorage } from '../core/utils';

import { ActivatedRoute, Router } from '../core/utils';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '../core/utils';
import { ErrorReporterService } from './error-reporter.service';
import { NuviotClientService } from './nuviot-client.service';
import { AuthRequest, AuthResponse } from '../models/AuthRequest';


export class UserService {
  paramOptions: any;
  queryParams: any;

  constructor(private http: HttpClient,
    private clientService: NuviotClientService,
    private errorReporter: ErrorReporterService,
    private router: Router,
    private _activatedRoute: ActivatedRoute) {

    console.log('create user service instance');
      if(this._activatedRoute.snapshot)
      {

    this.queryParams = Object.keys(this._activatedRoute.snapshot.queryParams).length > 0 ? this._activatedRoute.snapshot.queryParams : {};
    const paramOptions = {};

    if (this.hasParams()) {
      paramOptions['queryParamsHandling'] = 'preserve';
    } else {
      if (window.location.href.search) {
        const vm = this;
        location.search.substr(1).replace('==', '`').split('&').forEach(function (item) {
          const parts = item.split('=');

          if (parts[0] !== '') {
            vm.queryParams[parts[0]] = parts[1].replace('`', '==');
          }
        });
        if (this.hasParams()) {
          paramOptions['queryParams'] = this.queryParams;
        }
      }
    }
    }
  }

  get isLoggedIn(): boolean {
    return window.localStorage.getItem("is_logged_in") == "login_true";
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn$.next(value);
    window.localStorage.setItem("is_logged_in", value ? "login_true" : "login_false");
  }

  private _users: Core.ListResponse<Users.AppUserSummary>;
  private _org: Users.Org;

  protected _isLoggedIn$ = new ReplaySubject<boolean>(0);
  protected _org$ = new ReplaySubject<Users.Org>(null);
  protected _user$ = new ReplaySubject<Users.AppUser>(null);
  protected _users$ = new ReplaySubject<Core.ListResponse<Users.AppUserSummary>>(null);

  async loadCurrentUser(): Promise<Users.AppUser> {
      const response = await this.clientService.request<Core.FormResult<Users.AppUser, Users.AppUserView>>('/api/user');
      this.setUser(response.model);
      this.isLoggedIn = true;
      return response.model;
  }

  async updateCoreInfo(coreUserInfo: Users.CoreUserInfo){
    await this.clientService.update('/api/user/coreinfo', coreUserInfo);
  }

  hasParams() {
    return Object.keys(this.queryParams).length > 0;
  }

  public logout() {
    this.http.get(`${environment.siteUri}/api/account/logout`)
      .then(result => {
      });
    this.setUser(null);
    this.isLoggedIn = false;
  }

  public getOrgsForCurrentUser(): Promise<Core.ListResponse<Users.OrgUser>> {
    return this.clientService.getListResponse<Users.OrgUser>(`/api/user/orgs`);
  }

  public async acceptTermsAndConditions(): Promise<Core.InvokeResultEx<Users.AppUser>> {
    let result = await this.clientService.request<Core.InvokeResultEx<Users.AppUser>>('/api/user/accepttc')
    if(result.successful){
      this.setUser(result.result);
    }

    return result;
  }

  public changeOrganization(orgId: string): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      this.clientService.get(`/api/org/${orgId}/change`)
        .then(result => {
          if (result.successful) {
            this.loadCurrentUser()
              .then(res => resolve(true))
              .catch(err => reject(err));
          } else {
            console.log(result.errors[0].message);
            reject(result.errors[0].message);
          }
        })
        .catch(err => {
          if (reject) {
            reject(false);
          }
        });
    });

    return promise;
  }

  public loadUser(id: string): Promise<Core.FormResult<Users.AppUser, Users.AppUserView>> {
    return this.clientService.getFormResponse<Users.AppUser, Users.AppUserView>(`/api/user/${id}`);
  }

  public updateUser(user: Users.AppUser): Promise<Core.InvokeResult> {
    return this.clientService.update(`/api/user`, user);
  }

  public loadUsers(filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>> {
    const promise = new Promise<Core.ListResponse<Users.AppUserSummary>>((resolve, reject) => {

      this.clientService.getListResponse<Users.AppUserSummary>(`/api/users`, filter)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public loadActiveUsers(filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>> {
    const promise = new Promise<Core.ListResponse<Users.AppUserSummary>>((resolve, reject) => {

      this.clientService.getListResponse<Users.AppUserSummary>(`/api/users/active`, filter)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public getDistributionLists(filter: Core.ListFilter): Promise<Core.ListResponse<Users.DistroListSummary>> {
    const promise = new Promise<Core.ListResponse<Users.DistroListSummary>>((resolve, reject) => {

      this.clientService.getListResponse<Users.DistroListSummary>(`/api/distros`, filter)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public async auth(email: string, password: string): Promise<Core.InvokeResultEx<AuthResponse>> {
    let request: AuthRequest = {
      GrantType: 'password',  
      AppInstanceId: environment.appInstanceid,
      AppId: environment.appId, 
      DeviceId:environment.deviceId,
      ClientType:'mobileapp',
      Email: email,
      Password: password,
      UserName: email  
    }

    let result = await this.clientService.post<AuthRequest, AuthResponse>('/api/v1/auth', request);
    if(result.successful){
      var storage = new NativeStorage();
      await storage.setValue('access-token', result.result.accessToken);
     
    }

    return result;
  }

  public login(email: string, password: string, rememberMe: boolean): Promise<Users.AppUser> {
    const promise = new Promise<Users.AppUser>((resolve, reject) => {
      const body = new HttpParams()
        .set('email', email)
        .set('password', password)
        .set('rememberme', rememberMe.toString());

      let siteUrl = `${environment.siteUri}/api/v1/login`;
      if (email.indexOf('@') === -1) {
        siteUrl += 'kiosk';
      }

      this.http.post<Core.InvokeResultEx<string>>(siteUrl,
        body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('dashboard', 'true')
        }
      ).then(data => {
        if (data.successful) {
          if (data.result && data.result !== '') {
            this.router.navigate([`/kiosk/${data.result}`]);
          } else {
            this.loadCurrentUser()
              .then(usr => {
                resolve(usr);
              })
              .catch(err => reject(err));
          }
        } else {
          this.errorReporter.addErrors(data.errors);
          reject(data.errors[0].message);
        }
      }, err => {
        this.errorReporter.addErrors(err.statusText);
        reject(err.statusText);
      });
    });

    return promise;
  }

  validateDeviceUser(user: Devices.DeviceUser): Core.ErrorMessage[] {
    const errs: Core.ErrorMessage[] = [];

    if (!user.firstName) {
      errs.push({ message: 'First Name is a required field.' });
    }

    if (!user.lastName) {
      errs.push({ message: 'Last Name is a required field.' });
    }

    if (!user.email) {
      errs.push({ message: 'Email is a required field.' });
    } else {
      const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      if ((user.email.length <= 5 || !EMAIL_REGEXP.test(user.email))) {
        errs.push({ message: 'Invalid Email Address.' });
      }
    }

    if (!user.phoneNumber) {
      errs.push({ message: 'Phone Number is a required field.' });
    } else {
      const PHONE_NUMBER_REGEXP = /^\d{10}$/i;

      if ((user.phoneNumber.length !== 10 || !PHONE_NUMBER_REGEXP.test(user.phoneNumber))) {
        errs.push({ message: 'Please enter your phone number without and spaces, dashes, spaces.' });
      }
    }

    if (!user.password) {
      errs.push({ message: 'Password is a required field.' });
    } else {
      const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#&$@!+\-*]{8,}$$/i;

      if ((user.password.length <= 5 || !PASSWORD_REGEXP.test(user.password))) {
        // tslint:disable-next-line:max-line-length
        errs.push({ message: 'It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number and may contain the characters #,&,$,\@,!,+,-' });
      }
    }

    if (user.password !== user.confirmPassword) {
      errs.push({ message: 'Password and confirm password must match.' });
    }

    return errs;
  }

  onLoggedIn(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  onUsers(): Observable<Core.ListResponse<Users.AppUserSummary>> {
    return this._users$.asObservable();
  }

  onUser(): Observable<Users.AppUser> {
    return this._user$.asObservable();
  }

  onOrg(): Observable<Users.Org> {
    return this._org$.asObservable();
  }

  getUsers(): Core.ListResponse<Users.AppUserSummary> {
    return this._users;
  }

  getOrg(): Users.Org {
    return this._org;
  }

  getUser(): Users.AppUser {
    let user = window.localStorage.getItem("app_user");
    if (user) {
      return JSON.parse(user);
    }

    return undefined;
  }

  setUser(user: Users.AppUser) {
    if (user) {
      window.localStorage.setItem("app_user", JSON.stringify(user));
      this._user$.next(user);
      this.setOrg({ id: user.currentOrganization.id, name: user.currentOrganization.text });
    } else {
      window.localStorage.removeItem("app_user");
      this.setOrg(null);
      this._user$.next(null);
    }
  }

  addMediaResourceForUser(userId: string, mediaResourceEH: { id: string; text: string; key: string; }) {
    this.clientService.post(`/api/user/${userId}/mediaresource`, mediaResourceEH);
  }

  async showWelcomeOnLogin() {
    this.clientService.request('/api/users/welcome/show/true');
  }

  async hideWelcomeOnLogin() {
    this.clientService.request('/api/users/welcome/show/false');
  }

  setOrg(org: Users.Org) {
    if (org) {
      window.localStorage.setItem("app_user_org", JSON.stringify(org));
      this._org$.next(org);
    } else {
      this._org$.next(null);
      window.localStorage.removeItem("app_user_org");
    }
  }

}
