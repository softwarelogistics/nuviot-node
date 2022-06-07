
import { NuviotClientService } from './nuviot-client.service';


export class HrService {
  constructor(private nuviotClient: NuviotClientService) {
  }

  async addJobApplication(application: Users.NewJobApplication ) {
    await this.nuviotClient.post('/api/job/application', application);
  }

  async updateJobApplication(application: Users.JobApplication ) {
    await this.nuviotClient.update('/api/job/application', application);
  }

  async getJobApplication(id: string): Promise<Users.JobApplication> {
    return await this.nuviotClient.request<Users.JobApplication>(`/api/job/application/${id}`);
  }

  async getApplicationsForUser(userid: string): Promise<Users.JobApplicationSummary[]> {
    return await this.nuviotClient.request<Users.JobApplicationSummary[]>(`/api/job/applications/user/${userid}`);
  }

  async getMyApplications(): Promise<Users.JobApplicationSummary[]> {
    return await this.nuviotClient.request<Users.JobApplicationSummary[]>(`/api/job/applications/my`);
  }

  async removeApplication(id: string) {
    return await this.nuviotClient.delete(`/api/job/application/${id}`);
  }

  async updateJobApplicationStatus(applicationId: string, statusId: string) {
    return await this.nuviotClient.request(`/api/job/applications/${applicationId}/${statusId}`);
  }

  async findJobApplicationsWithStatusAsync(jobId: string, statusId: string): Promise<Users.JobApplicationSummary[]> {
    return await this.nuviotClient.request<Users.JobApplicationSummary[]>(`/api/job/applications/${jobId}/${statusId}`);
  }

  async findJobApplicationsByJobIdAsync(jobId: string): Promise<Users.JobApplicationSummary[]> {
    return await this.nuviotClient.request<Users.JobApplicationSummary[]>(`/api/job/applications/${jobId}`);
  }

  async getApplicationForUserByKey(key: string) {
    return await this.nuviotClient.request<Users.JobApplication>(`/api/job/application/my/${key}`);
  }
}
