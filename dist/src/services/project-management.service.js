"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManagementService = void 0;
class ProjectManagementService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    getProjects() {
        return this.nuviotClient.request('/api/projects');
    }
    getActiveProjects() {
        return this.nuviotClient.request('/api/projects/active');
    }
    newModule() {
        return this.nuviotClient.request(`/api/project/module/factory`);
    }
    newProject() {
        return this.nuviotClient.request(`/api/project/factory`);
    }
    loadProject(id) {
        return this.nuviotClient.request(`/api/project/${id}`);
    }
    insertProject(project) {
        return this.nuviotClient.insert('/api/project', project);
    }
    updateProject(project) {
        return this.nuviotClient.update('/api/project', project);
    }
    deleteProject(id) {
        return this.nuviotClient.delete(`/api/project/${id}`);
    }
    getSprints(projectid) {
        return this.nuviotClient.request(`/api/project/${projectid}/sprints`);
    }
    newSprint(projectid) {
        return this.nuviotClient.request(`/api/project/${projectid}/sprints`);
    }
    newProjectTeamMember() {
        return this.nuviotClient.request(`/api/pm/teammember/factory`);
    }
    getSprint(sprintid) {
        return this.nuviotClient.request(`/api/project/sprint/${sprintid}`);
    }
    insertSprint(sprint) {
        return this.nuviotClient.insert('/api/project/sprint', sprint);
    }
    updateSprint(sprint) {
        return this.nuviotClient.update('/api/project/sprint', sprint);
    }
    getCustomKanbanViews() {
        return this.nuviotClient.request(`/api/pm/kanbanviews`);
    }
    getCustomKanbanView(id) {
        return this.nuviotClient.request(`/api/pm/kanbanview/${id}`);
    }
    createCustomKanbanView() {
        return this.nuviotClient.request(`/api/pm/kanbanview/factory`);
    }
    addCustomKanbanView(model) {
        return this.nuviotClient.insert(`/api/pm/kanbanview`, model);
    }
    updateCustomKanbanView(model) {
        return this.nuviotClient.update(`/api/pm/kanbanview`, model);
    }
    deleteCustomKanbanView(id) {
        return this.nuviotClient.delete(`/api/pm/kanbanview/${id}`);
    }
    getTasksForKanbanView(id) {
        return this.nuviotClient.request(`/api/pm/tasks/view/${id}`);
    }
    getTasks(id, status = 'all') {
        if (status === 'all') {
            return this.nuviotClient.request(`/api/pm/tasks/project/${id}`);
        }
        else {
            return this.nuviotClient.request(`/api/pm/tasks/project/${id}/${status}`);
        }
    }
    updateTaskStatus(taskId, status) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}/status/${status}`);
    }
    updateTaskStatusAndAssignedTo(taskId, update) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskId}/boardupdate`, update);
    }
    getTasksAssignedToUser(userId, status) {
        if (status === 'all') {
            return this.nuviotClient.request(`/api/pm/tasks/assignedto/${userId}`);
        }
        else {
            return this.nuviotClient.request(`/api/pm/tasks/assignedto/${userId}/${status}`);
        }
    }
    getTaskForSprint(id, sprintid, status) {
        if (status === 'all') {
            return this.nuviotClient.request(`/api/pm/tasks/sprint/${sprintid}`);
        }
        else {
            return this.nuviotClient.request(`/api/pm/tasks/sprint/${sprintid}/${status}`);
        }
    }
    newTask(projectid = null) {
        if (projectid) {
            return this.nuviotClient.request(`/api/pm/task/project/${projectid}/factory`);
        }
        else {
            return this.nuviotClient.request(`/api/pm/task/factory`);
        }
    }
    createTask(newTaskRequest) {
        return this.nuviotClient.postWithResponse(`/api/tasks/add`, newTaskRequest);
    }
    workTaskToSummary(workTask) {
        return undefined;
    }
    getTaskTemplates() {
        return this.nuviotClient.request(`/api/pm/task/templates`);
    }
    newTaskTemplate() {
        return this.nuviotClient.getFormResponse(`/api/pm/task/template/factory`);
    }
    getTaskTemplate(id) {
        return this.nuviotClient.getFormResponse(`/api/pm/task/template/${id}`);
    }
    deleteTaskTemplate(id) {
        return this.nuviotClient.delete(`api/pm/task/template/${id}`);
    }
    createTaskTemplate() {
        return this.nuviotClient.getFormResponse(`/api/pm/task/template/factory`);
    }
    addTaskTemplate(template) {
        return this.nuviotClient.post(`/api/pm/task/template`, template);
    }
    updateTaskTemplate(template) {
        return this.nuviotClient.update(`/api/pm/task/template`, template);
    }
    newTaskForSprint(projectid, sprintid) {
        return this.nuviotClient.request(`/api/pm/task/project/${projectid}/sprint/${sprintid}/factory`);
    }
    insertTask(task) {
        return this.nuviotClient.insert('/api/pm/task', task);
    }
    getTask(taskId) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}`);
    }
    updateTask(task) {
        return this.nuviotClient.update('/api/pm/task', task);
    }
    updateTaskFromExternalItem(task) {
        return this.nuviotClient.updateWithResponse('/api/pm/task/externalupdate', task);
    }
    updateTaskDetail(task) {
        return this.nuviotClient.update('/api/pm/task/detail', task);
    }
    updateTaskForKnownActivity(task, activityType, activityId) {
        return this.nuviotClient.update(`/api/pm/task/${activityType}/${activityId}`, task);
    }
    requestUpdate(taskId, memberId, note) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskId}/teammember/${memberId}/ping`, note);
    }
    deleteTask(id) {
        return this.nuviotClient.delete(`/api/pm/task/${id}`);
    }
    newSubTask() {
        return this.nuviotClient.request(`/api/pm/subtask/factory`);
    }
    newHelpResource() {
        return this.nuviotClient.request(`/api/pm/helpresource/factory`);
    }
    newExpectedOutcome() {
        return this.nuviotClient.request(`/api/pm/expectedoutcome/factory`);
    }
    insertReportSettings(settings) {
        return this.nuviotClient.insert('/api/pm/tasks/report/settings', settings);
    }
    getReportSettingForOrg() {
        return this.nuviotClient.request(`/api/pm/tasks/report/settings`);
    }
    createNewReportSettings() {
        return this.nuviotClient.request(`/api/pm/tasks/report/settings/factory`);
    }
    getReportSettings(id) {
        return this.nuviotClient.request(`/api/pm/tasks/report/settings/${id}`);
    }
    updateReportSettings(settings) {
        return this.nuviotClient.update('/api/pm/tasks/report/settings', settings);
    }
    getTasksByStatus(status) {
        return this.nuviotClient.request(`/api/pm/tasks/${status}`);
    }
    getTasksForProjectByStatus(projectId, status) {
        return this.nuviotClient.request(`/api/pm/tasks/project/${projectId}/${status}`);
    }
    getActiveTasks() {
        return this.nuviotClient.request(`/api/pm/tasks/active`);
    }
    getActiveTasksForProject(projectId) {
        return this.nuviotClient.request(`/api/pm/tasks/active/project/${projectId}`);
    }
    newToDo() {
        return this.nuviotClient.request(`/api/pm/todo/factory`);
    }
    getToDo(id) {
        return this.nuviotClient.request(`/api/pm/todo/${id}`);
    }
    insertToDo(todo) {
        return this.nuviotClient.insert('/api/pm/todo', todo);
    }
    updateToDo(todo) {
        return this.nuviotClient.update('/api/pm/todo', todo);
    }
    deleteToDo(id) {
        return this.nuviotClient.delete(`/api/pm/todo/${id}`);
    }
    getToDosAssignedTo(id, openOnly) {
        let uri = `/api/pm/todo/assignedto/${id}`;
        if (openOnly) {
            uri += '/open';
        }
        return this.nuviotClient.request(uri);
    }
    getToDosAssignedBy(id, openOnly) {
        let uri = `/api/pm/todo/assignedby/${id}`;
        if (openOnly) {
            uri += '/open';
        }
        return this.nuviotClient.request(uri);
    }
    addIssue(taskid, issue) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/issue`, issue);
    }
    updateIssue(taskid, issue) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/issue`, issue);
    }
    removeIssue(taskid, issueId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/issue/${issueId}`);
    }
    addTeamMember(taskid, teamMember) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/teamMember`, teamMember);
    }
    updateTeamMember(taskid, teamMember) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/teamMember`, teamMember);
    }
    removeTeamMember(taskid, teamMemberId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/teammember/${teamMemberId}`);
    }
    addSubTask(taskid, subTask) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/subtask`, subTask);
    }
    updateSubTask(taskid, subTask) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/subtask`, subTask);
    }
    removeSubTask(taskid, subTaskId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/subtask/${subTaskId}`);
    }
    applyTemplate(taskId, templateId) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}/template/${templateId}/apply`);
    }
    moveSubTaskUp(taskId, subTaskId) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}/subtask/${subTaskId}/moveup`);
    }
    moveSubTaskDown(taskId, subTaskId) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}/subtask/${subTaskId}/movedown`);
    }
    addDiscussion(taskid, discussion) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/note`, discussion);
    }
    updateDiscussion(taskid, discussion) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/note`, discussion);
    }
    removeDiscussion(taskid, discussionId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/note/${discussionId}`);
    }
    addRisk(taskid, risk) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/risk`, risk);
    }
    updateRisk(taskid, risk) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/risk`, risk);
    }
    removeRisk(taskid, riskId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/risk/${riskId}`);
    }
    addLabel(taskid, label) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/label`, label);
    }
    removeLabel(taskid, labelid) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/label/${labelid}`);
    }
    addHelpResources(taskid, helpResource) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/helpresource`, helpResource);
    }
    updateHelpResource(taskid, helpResource) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/helpresource`, helpResource);
    }
    removeResource(taskid, helpResourceId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/helpresource/${helpResourceId}`);
    }
    addSubTaskHelpResources(taskid, subTaskId, helpResource) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/subtask/${subTaskId}/helpresource`, helpResource);
    }
    updateSubTaskHelpResource(taskid, subTaskId, helpResource) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/subtask/${subTaskId}/helpresource`, helpResource);
    }
    removeSubTaskResource(taskid, subTaskId, helpResourceId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/subtask/${subTaskId}/helpresource/${helpResourceId}`);
    }
    addExpectedOutcome(taskid, expectedOutcome) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/expectedoutcome`, expectedOutcome);
    }
    updateExpectedOutcome(taskid, expectedOutcome) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/expectedoutcome`, expectedOutcome);
    }
    removeExpectedOutcome(taskid, expectedOutcomeId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/expectedoutcome/${expectedOutcomeId}`);
    }
    addVerificationRun(taskid, expectedoutcomeid, verificationRun) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/expectedoutcome/${expectedoutcomeid}/verificationrun`, verificationRun);
    }
    updateVerificationRun(taskid, expectedoutcomeid, verificationRun) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/expectedoutcome/${expectedoutcomeid}/verificationrun`, verificationRun);
    }
    updateVerificationSteps(taskid, expectedoutcomeid, verificationSteps) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskid}/expectedoutcome/${expectedoutcomeid}/verificationsteps`, verificationSteps);
    }
    deleteVerificationRun(taskid, expectedoutcomeid, verificationRunId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/expectedoutcome/${expectedoutcomeid}/verificationrun/${verificationRunId}`);
    }
    updateAdditionalInformation(taskId, additionalInformation) {
        return this.nuviotClient.updateWithResponse(`/api/pm/task/${taskId}/additionalinformation`, { contents: additionalInformation });
    }
    flagTask(taskId, reason, notes) {
        const flagTaskRequest = {
            workTaskId: taskId,
            reason: reason,
            notes: notes,
        };
        return this.nuviotClient.post('/api/pm/task/flag', flagTaskRequest);
    }
    getFlaggedTasks() {
        return this.nuviotClient.getListResponse("/api/pm/task/flagged");
    }
    getLateTasks() {
        return this.nuviotClient.getListResponse("/api/pm/task/late");
    }
    getTasksWithOpenIssues() {
        return this.nuviotClient.getListResponse("/api/pm/tasks/openissue");
    }
    getTasksWithRisks() {
        return this.nuviotClient.getListResponse("/api/pm/tasks/openrisks");
    }
    getBlockedTasks() {
        return this.nuviotClient.getListResponse("/api/pm/tasks/blocked");
    }
    updateDueDate(taskId, dueDate) {
        return this.nuviotClient.request(`/api/pm/task/${taskId}/duedate/${dueDate}`);
    }
    updateFlagTask(taskId, flagId, isOpen, reason, notes) {
        const flagTaskRequest = {
            workTaskId: taskId,
            flaggedTaskId: flagId,
            reason: reason,
            notes: notes,
            isOpen: isOpen,
        };
        return this.nuviotClient.updateWithResponse('/api/pm/task/flag', flagTaskRequest);
    }
    removeAttachmentFromTask(taskId, attachmentId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskId}/attachment/${attachmentId}`);
    }
    removeAttachment(taskId, parentType, parentId, attachmentId) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskId}/${parentType}/${parentId}/attachment/${attachmentId}`);
    }
    addIssueNote(taskid, issueid, issueNote) {
        return this.nuviotClient.postWithResponse(`/api/pm/task/${taskid}/issue/${issueid}/note`, issueNote);
    }
    removeIssueNote(taskid, issueid, issuenoteid) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/issue/${issueid}/note/${issuenoteid}`);
    }
    addUpstreamTask(taskid, upstreamtaskid) {
        return this.nuviotClient.request(`/api/pm/task/${taskid}/upstream/${upstreamtaskid}`);
    }
    addDownstreamTask(taskid, downstreamtaskid) {
        return this.nuviotClient.request(`/api/pm/task/${taskid}/downstream/${downstreamtaskid}`);
    }
    addRelatedTask(taskid, relatedtaskid) {
        return this.nuviotClient.request(`/api/pm/task/${taskid}/related/${relatedtaskid}`);
    }
    removeUpstreamTask(taskid, upstreamtaskid) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/upstream/${upstreamtaskid}`);
    }
    removeDownstreamTask(taskid, downstreamtaskid) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/downstream/${downstreamtaskid}`);
    }
    removeRelatedTask(taskid, relatedtaskid) {
        return this.nuviotClient.deleteWithResponse(`/api/pm/task/${taskid}/related/${relatedtaskid}`);
    }
    searchTasks(projectId, query) {
        return this.nuviotClient.postForListResponse('/api/pm/task/search', {
            query: query,
            projectId: projectId,
        });
    }
    deleteStatusConfigurations(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.delete(`/api/pm/statusconfiguration/${id}`);
        });
    }
    getStatusConfigurations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.getListResponse(`/api/pm/statusconfigurations`);
        });
    }
    getStatusConfiguration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.getFormResponse(`/api/pm/statusconfiguration/${id}`);
        });
    }
    addStatusConfigurations(statusConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.insert(`/api/pm/statusconfiguration`, statusConfig);
        });
    }
    updateStatusConfigurations(statusConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.update(`/api/pm/statusconfiguration`, statusConfig);
        });
    }
    createStatusConfiguration() {
        return this.nuviotClient.request(`/api/pm/statusconfiguration/factory`);
    }
    createStatusOption() {
        return this.nuviotClient.request(`/api/pm/statusconfiguration/option/factory`);
    }
    createStatusTransition() {
        return this.nuviotClient.request(`/api/pm/statusconfiguration/statustransition/factory`);
    }
    deleteWorkTaskType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.delete(`/api/pm/statusconfiguration/${id}`);
        });
    }
    getWorkTaskTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.getListResponse(`/api/pm/worktasktypes`);
        });
    }
    getWorkTaskType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.getFormResponse(`/api/pm/worktasktype/${id}`);
        });
    }
    addWorkTaskType(workTaskType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.insert(`/api/pm/worktasktype`, workTaskType);
        });
    }
    updateWorkTaskType(workTaskType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.update(`/api/pm/worktasktype`, workTaskType);
        });
    }
    createWorkTaskType() {
        return this.nuviotClient.request(`/api/pm/worktasktype/factory`);
    }
    convertToSummary(task) {
        const wts = {
            id: task.id,
            projectId: task.project.id,
            projectName: task.project.text,
            key: task.key,
            canEdit: true,
            isBlocked: false,
            isFlagged: false,
            organizationName: task.ownerOrganization.text,
            name: task.name,
            condition: task.condition.text,
            hasOpenIssues: false,
            taskCode: task.taskCode,
            status: task.status.text,
            statusKey: task.status.key,
            statusId: task.status.key,
            module: '',
            moduleId: '',
            externalStatus: '',
            externalStatusId: '',
            dueDate: task.dueDate,
            expectedCloseDate: '',
            description: '',
            assignedToUser: '',
            assignedToUserId: '',
            primaryContributor: '',
            primaryContributorId: '',
            qaResource: '',
            qaResourceId: '',
            lastUpdatedDate: task.lastUpdatedDate,
            complexity: task.complexity.text,
            scopeOfEffort: task.scopeOfEffort.text,
            points: 0,
            externalTaskCode: task.externalTaskCode,
            externalTaskLink: task.externalTaskLink,
            labels: task.labels,
        };
        if (task.externalStatus) {
            wts.externalStatus = task.externalStatus.text;
            wts.externalStatusId = task.externalStatus.id;
        }
        if (task.assignedByUser) {
            wts.assignedToUser = task.assignedToUser.text;
            wts.assignedToUserId = task.assignedToUser.id;
        }
        if (task.primaryContributorUser) {
            wts.primaryContributorId = task.primaryContributorUser.id;
            wts.primaryContributor = task.primaryContributorUser.text;
        }
        if (task.qaResource) {
            wts.qaResource = task.qaResource.text;
            wts.qaResource = task.qaResource.id;
        }
        return wts;
    }
    getALMIntegrations() {
        return this.nuviotClient.getListResponse(`/api/alm/integrations`);
    }
    createALMIntegration() {
        return this.nuviotClient.getFormResponse(`/api/alm/integration/factory`);
    }
    getALMIntegration(id) {
        return this.nuviotClient.getFormResponse(`/api/alm/integration/${id}`);
    }
    deleteALMIntegration(id) {
        return this.nuviotClient.delete(`/api/alm/integration/${id}`);
    }
    insertALMIntegration(integration) {
        return this.nuviotClient.insert(`/api/alm/integration`, integration);
    }
    updateALMIntegration(integration) {
        return this.nuviotClient.update(`/api/alm/integration`, integration);
    }
    getExternalItem(id) {
        return this.nuviotClient.request(`/api/alm/external/workitem/${id}`);
    }
    getALMClientConfiguration(id) {
        return this.nuviotClient.request(`/api/alm/integration/${id}/auth`);
    }
    getImportedWorkTasks(id, nextRowKey = "") {
        if (nextRowKey) {
            const listRequest = {
                nextRowKey: nextRowKey,
            };
            return this.nuviotClient.getListResponse(`/api/alm/devops/workitems/${id}`, listRequest);
        }
        else {
            return this.nuviotClient.getListResponse(`/api/alm/devops/workitems/${id}`);
        }
    }
    archiveList(id) {
        return this.nuviotClient.post(`/api/alm/external/workitem/archive`, id);
    }
    archiveExternalItem(id) {
        return this.nuviotClient.get(`/api/alm/external/workitem/${id}/archive`);
    }
    getWorKTaskByExternalId(id) {
        return this.nuviotClient.request(`/api/pm/task/externalid/${id}`);
    }
}
exports.ProjectManagementService = ProjectManagementService;
