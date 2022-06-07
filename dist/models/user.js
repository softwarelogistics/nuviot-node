var Users;
(function (Users) {
    const JobApplication_Status_New = 'new';
    const JobApplication_Status_InProgress = 'inprogress';
    const JobApplication_Status_InReview = 'inreview';
    const JobApplication_Status_Interviewing = 'interviewing';
    const JobApplication_Status_OnHold = 'onhold';
    const JobApplication_Status_Rejected = 'rejected';
    const ExternalLogin_GitHub = 'github';
    const ExternalLogin_Microsoft = 'microsoft';
    const ExternalLogin_Google = 'google';
    const ExternalLogin_LinkedIn = 'linkedin';
    class AppUser {
        toEntityHeader() {
            return {
                id: this.id,
                text: this.name
            };
        }
    }
    Users.AppUser = AppUser;
    class DistroListSummary {
    }
    Users.DistroListSummary = DistroListSummary;
    class CoreUserInfo {
    }
    Users.CoreUserInfo = CoreUserInfo;
    class AppUserSummary {
    }
    Users.AppUserSummary = AppUserSummary;
    class AppUserView {
    }
    Users.AppUserView = AppUserView;
    class Org {
    }
    Users.Org = Org;
    class OrgUser {
    }
    Users.OrgUser = OrgUser;
    class NewJobApplication {
    }
    Users.NewJobApplication = NewJobApplication;
    class JobApplication {
    }
    Users.JobApplication = JobApplication;
    class JobApplicationHistory {
    }
    Users.JobApplicationHistory = JobApplicationHistory;
    class JobApplicationSummary {
    }
    Users.JobApplicationSummary = JobApplicationSummary;
    class ExternalLogin {
    }
    Users.ExternalLogin = ExternalLogin;
})(Users || (Users = {}));
