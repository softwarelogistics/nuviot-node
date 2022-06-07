var Users;
(function (Users) {
    var JobApplication_Status_New = 'new';
    var JobApplication_Status_InProgress = 'inprogress';
    var JobApplication_Status_InReview = 'inreview';
    var JobApplication_Status_Interviewing = 'interviewing';
    var JobApplication_Status_OnHold = 'onhold';
    var JobApplication_Status_Rejected = 'rejected';
    var ExternalLogin_GitHub = 'github';
    var ExternalLogin_Microsoft = 'microsoft';
    var ExternalLogin_Google = 'google';
    var ExternalLogin_LinkedIn = 'linkedin';
    var AppUser = /** @class */ (function () {
        function AppUser() {
        }
        AppUser.prototype.toEntityHeader = function () {
            return {
                id: this.id,
                text: this.name
            };
        };
        return AppUser;
    }());
    Users.AppUser = AppUser;
    var DistroListSummary = /** @class */ (function () {
        function DistroListSummary() {
        }
        return DistroListSummary;
    }());
    Users.DistroListSummary = DistroListSummary;
    var CoreUserInfo = /** @class */ (function () {
        function CoreUserInfo() {
        }
        return CoreUserInfo;
    }());
    Users.CoreUserInfo = CoreUserInfo;
    var AppUserSummary = /** @class */ (function () {
        function AppUserSummary() {
        }
        return AppUserSummary;
    }());
    Users.AppUserSummary = AppUserSummary;
    var AppUserView = /** @class */ (function () {
        function AppUserView() {
        }
        return AppUserView;
    }());
    Users.AppUserView = AppUserView;
    var Org = /** @class */ (function () {
        function Org() {
        }
        return Org;
    }());
    Users.Org = Org;
    var OrgUser = /** @class */ (function () {
        function OrgUser() {
        }
        return OrgUser;
    }());
    Users.OrgUser = OrgUser;
    var NewJobApplication = /** @class */ (function () {
        function NewJobApplication() {
        }
        return NewJobApplication;
    }());
    Users.NewJobApplication = NewJobApplication;
    var JobApplication = /** @class */ (function () {
        function JobApplication() {
        }
        return JobApplication;
    }());
    Users.JobApplication = JobApplication;
    var JobApplicationHistory = /** @class */ (function () {
        function JobApplicationHistory() {
        }
        return JobApplicationHistory;
    }());
    Users.JobApplicationHistory = JobApplicationHistory;
    var JobApplicationSummary = /** @class */ (function () {
        function JobApplicationSummary() {
        }
        return JobApplicationSummary;
    }());
    Users.JobApplicationSummary = JobApplicationSummary;
    var ExternalLogin = /** @class */ (function () {
        function ExternalLogin() {
        }
        return ExternalLogin;
    }());
    Users.ExternalLogin = ExternalLogin;
})(Users || (Users = {}));
