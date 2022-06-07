export class AuthRequest {
    GrantType = 'password';
    AppId = 'dashboard';
    DeviceId = 'browser';
    AppInstanceId = 'browser';
    ClientType = 'browser';
    Email: string;
    UserName: string;
    Password: string;
    RefreshToken?: '';
    OrgId?: '';
    OrgName?: '';
}
