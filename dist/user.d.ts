declare namespace Users {
    class AppUser {
        firstName: string;
        lastName: string;
        userName: string;
        isOrgAdmin: boolean;
        isAppBuilder: boolean;
        isDeviceUser: boolean;
        isSystemAdmin: boolean;
        isFinanceAdmin: boolean;
        title: string;
        teamsAccountName: string;
        id: string;
        name: string;
        bio: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        currentOrganization: Core.EntityHeader;
        email: string;
        phoneNumber: string;
        profileImageUrl: Core.Image;
        externalLogins: ExternalLogin[];
        mediaResources: Core.EntityHeader[];
        termsAndConditionsAccepted: boolean;
        termsAndConditionsAcceptedIPAddress: string;
        termsAndConditionsAcceptedDateTime: string;
        toEntityHeader(): Core.EntityHeader;
    }
    class DistroListSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    class CoreUserInfo {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        bio: string;
        title: string;
        teamsAccountName: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    }
    class AppUserSummary {
        id: string;
        name: string;
        email: string;
    }
    class AppUserView {
        firstName: Core.FormField;
        lastName: Core.FormField;
        isOrgAdmin: Core.FormField;
        email: Core.FormField;
        phoneNumber: Core.FormField;
    }
    class Org {
        id: string;
        name: string;
    }
    class OrgUser {
        key: string;
        userName: string;
        email: string;
        profileImageUrl: string;
        orgId: string;
        organizationName: string;
        isOrgAdmin: boolean;
    }
    class NewJobApplication {
        job: Core.EntityHeader;
        surveyResults: Core.EntityHeader[];
    }
    class JobApplication {
        id: string;
        name: string;
        key: string;
        description: string;
        notes: string;
        internalNotes?: string;
        candidate: Core.EntityHeader;
        job: Core.EntityHeader;
        status: Core.EntityHeader;
        statusDate: string;
        surveyResults: Core.EntityHeader[];
        history: JobApplicationHistory[];
    }
    class JobApplicationHistory {
        status: Core.EntityHeader;
        statusUser: Core.EntityHeader;
        statusDate: string;
        notes: string;
    }
    class JobApplicationSummary {
        id: string;
        applicationDate: string;
        candidate: string;
        candidateUserId: string;
        jobName: string;
        name: string;
        key: string;
        jobId: string;
        status: string;
        statusKey: string;
        statusDat: string;
    }
    class ExternalLogin {
        id: string;
        userName: string;
        email: string;
        firstName: string;
        lastName: string;
        organization: string;
        provider: Core.EntityHeader;
    }
}
