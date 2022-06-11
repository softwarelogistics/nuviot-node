export declare class AuthRequest {
    GrantType: string;
    AppId: string;
    DeviceId: string;
    AppInstanceId: string;
    ClientType: string;
    Email: string;
    UserName: string;
    Password: string;
    RefreshToken?: '';
    OrgId?: '';
    OrgName?: '';
}
export interface AuthResponse {
    accessToken: string;
    accessTokenExpiresUTC: string;
    refreshToken: string;
    refreshTokenExpiresUTC: string;
    appInstanceId: string;
    isLockedOut: boolean;
    user: Core.EntityHeader;
    org: Core.EntityHeader;
    roles: Core.EntityHeader[];
}
