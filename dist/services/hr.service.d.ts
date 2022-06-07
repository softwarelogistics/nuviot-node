import { NuviotClientService } from './nuviot-client.service';
export declare class HrService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    addJobApplication(application: Users.NewJobApplication): Promise<void>;
    updateJobApplication(application: Users.JobApplication): Promise<void>;
    getJobApplication(id: string): Promise<Users.JobApplication>;
    getApplicationsForUser(userid: string): Promise<Users.JobApplicationSummary[]>;
    getMyApplications(): Promise<Users.JobApplicationSummary[]>;
    removeApplication(id: string): Promise<Core.InvokeResult>;
    updateJobApplicationStatus(applicationId: string, statusId: string): Promise<unknown>;
    findJobApplicationsWithStatusAsync(jobId: string, statusId: string): Promise<Users.JobApplicationSummary[]>;
    findJobApplicationsByJobIdAsync(jobId: string): Promise<Users.JobApplicationSummary[]>;
    getApplicationForUserByKey(key: string): Promise<Users.JobApplication>;
}
