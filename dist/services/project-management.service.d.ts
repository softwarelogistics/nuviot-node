import { NuviotClientService } from './nuviot-client.service';
export declare class ProjectManagementService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    getProjects(): Promise<Core.ListResponse<Planner.ProjectSummary>>;
    getActiveProjects(): Promise<Core.ListResponse<Planner.ProjectSummary>>;
    newModule(): Promise<Core.FormResult<Planner.Module, Planner.ModuleView>>;
    newProject(): Promise<Core.FormResult<Planner.Project, Planner.ProjectView>>;
    loadProject(id: string): Promise<Core.FormResult<Planner.Project, Planner.ProjectView>>;
    insertProject(project: Planner.Project): Promise<Core.InvokeResult>;
    updateProject(project: Planner.Project): Promise<Core.InvokeResult>;
    deleteProject(id: string): Promise<Core.InvokeResult>;
    getSprints(projectid: string): Promise<Core.ListResponse<Planner.Sprint>>;
    newSprint(projectid: string): Promise<Core.FormResult<Planner.Sprint, Planner.SprintView>>;
    newProjectTeamMember(): Promise<Core.FormResult<Planner.TeamMember, Planner.TeamMemberView>>;
    getSprint(sprintid: string): Promise<Core.FormResult<Planner.Sprint, Planner.SprintView>>;
    insertSprint(sprint: Planner.Sprint): Promise<Core.InvokeResult>;
    updateSprint(sprint: Planner.Sprint): Promise<Core.InvokeResult>;
    getCustomKanbanViews(): Promise<Core.ListResponse<Planner.KanbanView>>;
    getCustomKanbanView(id: string): Promise<Core.FormResult<Planner.KanbanView, Planner.KanbanViewView>>;
    createCustomKanbanView(): Promise<Core.FormResult<Planner.KanbanView, Planner.KanbanViewView>>;
    addCustomKanbanView(model: Planner.KanbanView): Promise<Core.InvokeResult>;
    updateCustomKanbanView(model: Planner.KanbanView): Promise<Core.InvokeResult>;
    deleteCustomKanbanView(id: Planner.KanbanView): Promise<Core.InvokeResult>;
    getTasksForKanbanView(id: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getTasks(id: string, status?: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    updateTaskStatus(taskId: string, status: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateTaskStatusAndAssignedTo(taskId: string, update: Planner.WorkTaskAssignmentStatusUpdate): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    getTasksAssignedToUser(userId: string, status: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getTaskForSprint(id: string, sprintid: string, status: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    newTask(projectid?: string): Promise<Core.FormResult<Planner.WorkTask, Planner.WorkTaskView>>;
    createTask(newTaskRequest: Planner.NewTask): Promise<Core.InvokeResultEx<Planner.WorkTaskSummary>>;
    workTaskToSummary(workTask: Planner.WorkTask): Planner.WorkTaskSummary;
    getTaskTemplates(): Promise<Core.ListResponse<Planner.TaskTemplateSummary>>;
    newTaskTemplate(): Promise<Core.FormResult<Planner.TaskTemplate, Planner.TaskTemplateView>>;
    getTaskTemplate(id: string): Promise<Core.FormResult<Planner.TaskTemplate, Planner.TaskTemplateView>>;
    deleteTaskTemplate(id: string): Promise<Core.InvokeResult>;
    createTaskTemplate(): Promise<Core.FormResult<Planner.TaskTemplate, Planner.TaskTemplateView>>;
    addTaskTemplate(template: Planner.TaskTemplate): Promise<Core.InvokeResult>;
    updateTaskTemplate(template: Planner.TaskTemplate): Promise<Core.InvokeResult>;
    newTaskForSprint(projectid: string, sprintid: string): Promise<Core.FormResult<Planner.WorkTask, Planner.WorkTaskView>>;
    insertTask(task: Planner.WorkTask): Promise<Core.InvokeResult>;
    getTask(taskId: string): Promise<Core.FormResult<Planner.WorkTask, Planner.WorkTaskView>>;
    updateTask(task: Planner.WorkTask): Promise<Core.InvokeResult>;
    updateTaskFromExternalItem(task: Planner.WorkTaskUpdateFromExternalItem): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateTaskDetail(task: Planner.WorkTask): Promise<Core.InvokeResult>;
    updateTaskForKnownActivity(task: Planner.WorkTask, activityType: string, activityId: string): Promise<Core.InvokeResult>;
    requestUpdate(taskId: string, memberId: string, note: Core.SimpleNote): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    deleteTask(id: string): Promise<Core.InvokeResult>;
    newSubTask(): Promise<Core.FormResult<Planner.SubTask, Planner.SubTaskView>>;
    newHelpResource(): Promise<Core.FormResult<Planner.HelpResource, Planner.HelpResourceView>>;
    newExpectedOutcome(): Promise<Core.FormResult<Planner.ExpectedOutcome, Planner.ExpectedOutcomeView>>;
    insertReportSettings(settings: Planner.TaskReportSettings): Promise<Core.InvokeResult>;
    getReportSettingForOrg(): Promise<Core.ListResponse<Planner.TaskReportSettingsSummary>>;
    createNewReportSettings(): Promise<Planner.TaskReportSettings>;
    getReportSettings(id: string): Promise<Core.InvokeResultEx<Planner.TaskReportSettings>>;
    updateReportSettings(settings: Planner.TaskReportSettings): Promise<Core.InvokeResult>;
    getTasksByStatus(status: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getTasksForProjectByStatus(projectId: string, status: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getActiveTasks(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getActiveTasksForProject(projectId: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    newToDo(): Promise<Core.FormResult<Planner.ToDo, Planner.ToDoView>>;
    getToDo(id: string): Promise<Core.FormResult<Planner.ToDo, Planner.ToDoView>>;
    insertToDo(todo: Planner.ToDo): Promise<Core.InvokeResult>;
    updateToDo(todo: Planner.ToDo): Promise<Core.InvokeResult>;
    deleteToDo(id: string): Promise<Core.InvokeResult>;
    getToDosAssignedTo(id: string, openOnly: boolean): Promise<Core.ListResponse<Planner.ToDo>>;
    getToDosAssignedBy(id: string, openOnly: boolean): Promise<Core.ListResponse<Planner.ToDo>>;
    addIssue(taskid: string, issue: Planner.WorkTaskIssue): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateIssue(taskid: string, issue: Planner.WorkTaskIssue): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeIssue(taskid: string, issueId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addTeamMember(taskid: string, teamMember: Planner.TeamMember): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateTeamMember(taskid: string, teamMember: Planner.TeamMember): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeTeamMember(taskid: string, teamMemberId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addSubTask(taskid: string, subTask: Planner.SubTask): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateSubTask(taskid: string, subTask: Planner.SubTask): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeSubTask(taskid: string, subTaskId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    applyTemplate(taskId: string, templateId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    moveSubTaskUp(taskId: string, subTaskId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    moveSubTaskDown(taskId: string, subTaskId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addDiscussion(taskid: string, discussion: Planner.WorkTaskDiscussion): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateDiscussion(taskid: string, discussion: Planner.WorkTaskDiscussion): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeDiscussion(taskid: string, discussionId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addRisk(taskid: string, risk: Planner.Risk): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateRisk(taskid: string, risk: Planner.Risk): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeRisk(taskid: string, riskId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addLabel(taskid: string, label: Core.Label): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeLabel(taskid: string, labelid: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addHelpResources(taskid: string, helpResource: Planner.HelpResource): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateHelpResource(taskid: string, helpResource: Planner.HelpResource): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeResource(taskid: string, helpResourceId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addSubTaskHelpResources(taskid: string, subTaskId: string, helpResource: Planner.HelpResource): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateSubTaskHelpResource(taskid: string, subTaskId: string, helpResource: Planner.HelpResource): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeSubTaskResource(taskid: string, subTaskId: string, helpResourceId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addExpectedOutcome(taskid: string, expectedOutcome: Planner.ExpectedOutcome): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateExpectedOutcome(taskid: string, expectedOutcome: Planner.ExpectedOutcome): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeExpectedOutcome(taskid: string, expectedOutcomeId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addVerificationRun(taskid: string, expectedoutcomeid: string, verificationRun: Planner.VerificationRun): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateVerificationRun(taskid: string, expectedoutcomeid: string, verificationRun: Planner.VerificationRun): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateVerificationSteps(taskid: string, expectedoutcomeid: string, verificationSteps: Planner.VerificationStep[]): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    deleteVerificationRun(taskid: string, expectedoutcomeid: string, verificationRunId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateAdditionalInformation(taskId: string, additionalInformation: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    flagTask(taskId: string, reason: string, notes: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    getFlaggedTasks(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getLateTasks(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getTasksWithOpenIssues(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getTasksWithRisks(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    getBlockedTasks(): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    updateDueDate(taskId: string, dueDate: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    updateFlagTask(taskId: string, flagId: string, isOpen: boolean, reason: string, notes: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeAttachmentFromTask(taskId: string, attachmentId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeAttachment(taskId: string, parentType: string, parentId: string, attachmentId: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addIssueNote(taskid: string, issueid: string, issueNote: Planner.WorkTaskIssueNote): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeIssueNote(taskid: string, issueid: string, issuenoteid: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    addUpstreamTask(taskid: string, upstreamtaskid: string): Promise<Planner.WorkTask>;
    addDownstreamTask(taskid: string, downstreamtaskid: string): Promise<Planner.WorkTask>;
    addRelatedTask(taskid: string, relatedtaskid: string): Promise<Planner.WorkTask>;
    removeUpstreamTask(taskid: string, upstreamtaskid: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeDownstreamTask(taskid: string, downstreamtaskid: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    removeRelatedTask(taskid: string, relatedtaskid: string): Promise<Core.InvokeResultEx<Planner.WorkTask>>;
    searchTasks(projectId: string, query: string): Promise<Core.ListResponse<Planner.WorkTaskSummary>>;
    deleteStatusConfigurations(id: string): Promise<Core.InvokeResult>;
    getStatusConfigurations(): Promise<Core.ListResponse<Planner.StatusConfiguration>>;
    getStatusConfiguration(id: string): Promise<Core.FormResult<Planner.StatusConfiguration, Planner.StatusConfigurationView>>;
    addStatusConfigurations(statusConfig: Planner.StatusConfiguration): Promise<Core.InvokeResult>;
    updateStatusConfigurations(statusConfig: Planner.StatusConfiguration): Promise<Core.InvokeResult>;
    createStatusConfiguration(): Promise<Core.FormResult<Planner.StatusConfiguration, Planner.StatusConfigurationView>>;
    createStatusOption(): Promise<Core.FormResult<Planner.StatusOption, Planner.StatusOptionView>>;
    createStatusTransition(): Promise<Core.FormResult<Planner.StatusTransition, Planner.StatusTransitionView>>;
    deleteWorkTaskType(id: string): Promise<Core.InvokeResult>;
    getWorkTaskTypes(): Promise<Core.ListResponse<Planner.WorkTaskType>>;
    getWorkTaskType(id: string): Promise<Core.FormResult<Planner.WorkTaskType, Planner.WorkTaskType>>;
    addWorkTaskType(workTaskType: Planner.WorkTaskType): Promise<Core.InvokeResult>;
    updateWorkTaskType(workTaskType: Planner.WorkTaskType): Promise<Core.InvokeResult>;
    createWorkTaskType(): Promise<Core.FormResult<Planner.WorkTaskType, Planner.WorkTaskTypeView>>;
    convertToSummary(task: Planner.WorkTask): Planner.WorkTaskSummary;
    getALMIntegrations(): Promise<Core.ListResponse<Planner.ALMIntegrationSummary>>;
    createALMIntegration(): Promise<Core.FormResult<Planner.ALMIntegration, Planner.ALMIntegrationView>>;
    getALMIntegration(id: string): Promise<Core.FormResult<Planner.ALMIntegration, Planner.ALMIntegrationView>>;
    deleteALMIntegration(id: string): Promise<Core.InvokeResult>;
    insertALMIntegration(integration: Planner.ALMIntegration): Promise<Core.InvokeResult>;
    updateALMIntegration(integration: Planner.ALMIntegration): Promise<Core.InvokeResult>;
    getExternalItem(id: string): Promise<Planner.ExternalWorkTask>;
    getALMClientConfiguration(id: string): Promise<Planner.ALMIntegrationAuthDetails>;
    getImportedWorkTasks(id: string, nextRowKey?: string): Promise<Core.ListResponse<Planner.ExternalWorkTaskSummary>>;
    archiveList(id: string[]): Promise<Core.InvokeResult>;
    archiveExternalItem(id: string): Promise<Core.InvokeResult>;
    getWorKTaskByExternalId(id: string): Promise<Planner.WorkTask>;
}
