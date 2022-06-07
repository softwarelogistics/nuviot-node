"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManagementService = void 0;
var core_1 = require("@angular/core");
var ProjectManagementService = /** @class */ (function () {
    function ProjectManagementService(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    ProjectManagementService.prototype.getProjects = function () {
        return this.nuviotClient.request('/api/projects');
    };
    ProjectManagementService.prototype.getActiveProjects = function () {
        return this.nuviotClient.request('/api/projects/active');
    };
    ProjectManagementService.prototype.newModule = function () {
        return this.nuviotClient.request("/api/project/module/factory");
    };
    ProjectManagementService.prototype.newProject = function () {
        return this.nuviotClient.request("/api/project/factory");
    };
    ProjectManagementService.prototype.loadProject = function (id) {
        return this.nuviotClient.request("/api/project/".concat(id));
    };
    ProjectManagementService.prototype.insertProject = function (project) {
        return this.nuviotClient.insert('/api/project', project);
    };
    ProjectManagementService.prototype.updateProject = function (project) {
        return this.nuviotClient.update('/api/project', project);
    };
    ProjectManagementService.prototype.deleteProject = function (id) {
        return this.nuviotClient.delete("/api/project/".concat(id));
    };
    ProjectManagementService.prototype.getSprints = function (projectid) {
        return this.nuviotClient.request("/api/project/".concat(projectid, "/sprints"));
    };
    ProjectManagementService.prototype.newSprint = function (projectid) {
        return this.nuviotClient.request("/api/project/".concat(projectid, "/sprints"));
    };
    ProjectManagementService.prototype.newProjectTeamMember = function () {
        return this.nuviotClient.request("/api/pm/teammember/factory");
    };
    ProjectManagementService.prototype.getSprint = function (sprintid) {
        return this.nuviotClient.request("/api/project/sprint/".concat(sprintid));
    };
    ProjectManagementService.prototype.insertSprint = function (sprint) {
        return this.nuviotClient.insert('/api/project/sprint', sprint);
    };
    ProjectManagementService.prototype.updateSprint = function (sprint) {
        return this.nuviotClient.update('/api/project/sprint', sprint);
    };
    ProjectManagementService.prototype.getCustomKanbanViews = function () {
        return this.nuviotClient.request("/api/pm/kanbanviews");
    };
    ProjectManagementService.prototype.getCustomKanbanView = function (id) {
        return this.nuviotClient.request("/api/pm/kanbanview/".concat(id));
    };
    ProjectManagementService.prototype.createCustomKanbanView = function () {
        return this.nuviotClient.request("/api/pm/kanbanview/factory");
    };
    ProjectManagementService.prototype.addCustomKanbanView = function (model) {
        return this.nuviotClient.insert("/api/pm/kanbanview", model);
    };
    ProjectManagementService.prototype.updateCustomKanbanView = function (model) {
        return this.nuviotClient.update("/api/pm/kanbanview", model);
    };
    ProjectManagementService.prototype.deleteCustomKanbanView = function (id) {
        return this.nuviotClient.delete("/api/pm/kanbanview/".concat(id));
    };
    ProjectManagementService.prototype.getTasksForKanbanView = function (id) {
        return this.nuviotClient.request("/api/pm/tasks/view/".concat(id));
    };
    ProjectManagementService.prototype.getTasks = function (id, status) {
        if (status === void 0) { status = 'all'; }
        if (status === 'all') {
            return this.nuviotClient.request("/api/pm/tasks/project/".concat(id));
        }
        else {
            return this.nuviotClient.request("/api/pm/tasks/project/".concat(id, "/").concat(status));
        }
    };
    ProjectManagementService.prototype.updateTaskStatus = function (taskId, status) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId, "/status/").concat(status));
    };
    ProjectManagementService.prototype.updateTaskStatusAndAssignedTo = function (taskId, update) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskId, "/boardupdate"), update);
    };
    ProjectManagementService.prototype.getTasksAssignedToUser = function (userId, status) {
        if (status === 'all') {
            return this.nuviotClient.request("/api/pm/tasks/assignedto/".concat(userId));
        }
        else {
            return this.nuviotClient.request("/api/pm/tasks/assignedto/".concat(userId, "/").concat(status));
        }
    };
    ProjectManagementService.prototype.getTaskForSprint = function (id, sprintid, status) {
        if (status === 'all') {
            return this.nuviotClient.request("/api/pm/tasks/sprint/".concat(sprintid));
        }
        else {
            return this.nuviotClient.request("/api/pm/tasks/sprint/".concat(sprintid, "/").concat(status));
        }
    };
    ProjectManagementService.prototype.newTask = function (projectid) {
        if (projectid === void 0) { projectid = null; }
        if (projectid) {
            return this.nuviotClient.request("/api/pm/task/project/".concat(projectid, "/factory"));
        }
        else {
            return this.nuviotClient.request("/api/pm/task/factory");
        }
    };
    ProjectManagementService.prototype.createTask = function (newTaskRequest) {
        return this.nuviotClient.postWithResponse("/api/tasks/add", newTaskRequest);
    };
    ProjectManagementService.prototype.workTaskToSummary = function (workTask) {
        return undefined;
    };
    ProjectManagementService.prototype.getTaskTemplates = function () {
        return this.nuviotClient.request("/api/pm/task/templates");
    };
    ProjectManagementService.prototype.newTaskTemplate = function () {
        return this.nuviotClient.getFormResponse("/api/pm/task/template/factory");
    };
    ProjectManagementService.prototype.getTaskTemplate = function (id) {
        return this.nuviotClient.getFormResponse("/api/pm/task/template/".concat(id));
    };
    ProjectManagementService.prototype.deleteTaskTemplate = function (id) {
        return this.nuviotClient.delete("api/pm/task/template/".concat(id));
    };
    ProjectManagementService.prototype.createTaskTemplate = function () {
        return this.nuviotClient.getFormResponse("/api/pm/task/template/factory");
    };
    ProjectManagementService.prototype.addTaskTemplate = function (template) {
        return this.nuviotClient.post("/api/pm/task/template", template);
    };
    ProjectManagementService.prototype.updateTaskTemplate = function (template) {
        return this.nuviotClient.update("/api/pm/task/template", template);
    };
    ProjectManagementService.prototype.newTaskForSprint = function (projectid, sprintid) {
        return this.nuviotClient.request("/api/pm/task/project/".concat(projectid, "/sprint/").concat(sprintid, "/factory"));
    };
    ProjectManagementService.prototype.insertTask = function (task) {
        return this.nuviotClient.insert('/api/pm/task', task);
    };
    ProjectManagementService.prototype.getTask = function (taskId) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId));
    };
    ProjectManagementService.prototype.updateTask = function (task) {
        return this.nuviotClient.update('/api/pm/task', task);
    };
    ProjectManagementService.prototype.updateTaskFromExternalItem = function (task) {
        return this.nuviotClient.updateWithResponse('/api/pm/task/externalupdate', task);
    };
    ProjectManagementService.prototype.updateTaskDetail = function (task) {
        return this.nuviotClient.update('/api/pm/task/detail', task);
    };
    ProjectManagementService.prototype.updateTaskForKnownActivity = function (task, activityType, activityId) {
        return this.nuviotClient.update("/api/pm/task/".concat(activityType, "/").concat(activityId), task);
    };
    ProjectManagementService.prototype.requestUpdate = function (taskId, memberId, note) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskId, "/teammember/").concat(memberId, "/ping"), note);
    };
    ProjectManagementService.prototype.deleteTask = function (id) {
        return this.nuviotClient.delete("/api/pm/task/".concat(id));
    };
    ProjectManagementService.prototype.newSubTask = function () {
        return this.nuviotClient.request("/api/pm/subtask/factory");
    };
    ProjectManagementService.prototype.newHelpResource = function () {
        return this.nuviotClient.request("/api/pm/helpresource/factory");
    };
    ProjectManagementService.prototype.newExpectedOutcome = function () {
        return this.nuviotClient.request("/api/pm/expectedoutcome/factory");
    };
    ProjectManagementService.prototype.insertReportSettings = function (settings) {
        return this.nuviotClient.insert('/api/pm/tasks/report/settings', settings);
    };
    ProjectManagementService.prototype.getReportSettingForOrg = function () {
        return this.nuviotClient.request("/api/pm/tasks/report/settings");
    };
    ProjectManagementService.prototype.createNewReportSettings = function () {
        return this.nuviotClient.request("/api/pm/tasks/report/settings/factory");
    };
    ProjectManagementService.prototype.getReportSettings = function (id) {
        return this.nuviotClient.request("/api/pm/tasks/report/settings/".concat(id));
    };
    ProjectManagementService.prototype.updateReportSettings = function (settings) {
        return this.nuviotClient.update('/api/pm/tasks/report/settings', settings);
    };
    ProjectManagementService.prototype.getTasksByStatus = function (status) {
        return this.nuviotClient.request("/api/pm/tasks/".concat(status));
    };
    ProjectManagementService.prototype.getTasksForProjectByStatus = function (projectId, status) {
        return this.nuviotClient.request("/api/pm/tasks/project/".concat(projectId, "/").concat(status));
    };
    ProjectManagementService.prototype.getActiveTasks = function () {
        return this.nuviotClient.request("/api/pm/tasks/active");
    };
    ProjectManagementService.prototype.getActiveTasksForProject = function (projectId) {
        return this.nuviotClient.request("/api/pm/tasks/active/project/".concat(projectId));
    };
    ProjectManagementService.prototype.newToDo = function () {
        return this.nuviotClient.request("/api/pm/todo/factory");
    };
    ProjectManagementService.prototype.getToDo = function (id) {
        return this.nuviotClient.request("/api/pm/todo/".concat(id));
    };
    ProjectManagementService.prototype.insertToDo = function (todo) {
        return this.nuviotClient.insert('/api/pm/todo', todo);
    };
    ProjectManagementService.prototype.updateToDo = function (todo) {
        return this.nuviotClient.update('/api/pm/todo', todo);
    };
    ProjectManagementService.prototype.deleteToDo = function (id) {
        return this.nuviotClient.delete("/api/pm/todo/".concat(id));
    };
    ProjectManagementService.prototype.getToDosAssignedTo = function (id, openOnly) {
        var uri = "/api/pm/todo/assignedto/".concat(id);
        if (openOnly) {
            uri += '/open';
        }
        return this.nuviotClient.request(uri);
    };
    ProjectManagementService.prototype.getToDosAssignedBy = function (id, openOnly) {
        var uri = "/api/pm/todo/assignedby/".concat(id);
        if (openOnly) {
            uri += '/open';
        }
        return this.nuviotClient.request(uri);
    };
    ProjectManagementService.prototype.addIssue = function (taskid, issue) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/issue"), issue);
    };
    ProjectManagementService.prototype.updateIssue = function (taskid, issue) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/issue"), issue);
    };
    ProjectManagementService.prototype.removeIssue = function (taskid, issueId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/issue/").concat(issueId));
    };
    ProjectManagementService.prototype.addTeamMember = function (taskid, teamMember) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/teamMember"), teamMember);
    };
    ProjectManagementService.prototype.updateTeamMember = function (taskid, teamMember) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/teamMember"), teamMember);
    };
    ProjectManagementService.prototype.removeTeamMember = function (taskid, teamMemberId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/teammember/").concat(teamMemberId));
    };
    ProjectManagementService.prototype.addSubTask = function (taskid, subTask) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/subtask"), subTask);
    };
    ProjectManagementService.prototype.updateSubTask = function (taskid, subTask) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/subtask"), subTask);
    };
    ProjectManagementService.prototype.removeSubTask = function (taskid, subTaskId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/subtask/").concat(subTaskId));
    };
    ProjectManagementService.prototype.applyTemplate = function (taskId, templateId) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId, "/template/").concat(templateId, "/apply"));
    };
    ProjectManagementService.prototype.moveSubTaskUp = function (taskId, subTaskId) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId, "/subtask/").concat(subTaskId, "/moveup"));
    };
    ProjectManagementService.prototype.moveSubTaskDown = function (taskId, subTaskId) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId, "/subtask/").concat(subTaskId, "/movedown"));
    };
    ProjectManagementService.prototype.addDiscussion = function (taskid, discussion) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/note"), discussion);
    };
    ProjectManagementService.prototype.updateDiscussion = function (taskid, discussion) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/note"), discussion);
    };
    ProjectManagementService.prototype.removeDiscussion = function (taskid, discussionId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/note/").concat(discussionId));
    };
    ProjectManagementService.prototype.addRisk = function (taskid, risk) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/risk"), risk);
    };
    ProjectManagementService.prototype.updateRisk = function (taskid, risk) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/risk"), risk);
    };
    ProjectManagementService.prototype.removeRisk = function (taskid, riskId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/risk/").concat(riskId));
    };
    ProjectManagementService.prototype.addLabel = function (taskid, label) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/label"), label);
    };
    ProjectManagementService.prototype.removeLabel = function (taskid, labelid) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/label/").concat(labelid));
    };
    ProjectManagementService.prototype.addHelpResources = function (taskid, helpResource) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/helpresource"), helpResource);
    };
    ProjectManagementService.prototype.updateHelpResource = function (taskid, helpResource) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/helpresource"), helpResource);
    };
    ProjectManagementService.prototype.removeResource = function (taskid, helpResourceId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/helpresource/").concat(helpResourceId));
    };
    ProjectManagementService.prototype.addSubTaskHelpResources = function (taskid, subTaskId, helpResource) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/subtask/").concat(subTaskId, "/helpresource"), helpResource);
    };
    ProjectManagementService.prototype.updateSubTaskHelpResource = function (taskid, subTaskId, helpResource) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/subtask/").concat(subTaskId, "/helpresource"), helpResource);
    };
    ProjectManagementService.prototype.removeSubTaskResource = function (taskid, subTaskId, helpResourceId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/subtask/").concat(subTaskId, "/helpresource/").concat(helpResourceId));
    };
    ProjectManagementService.prototype.addExpectedOutcome = function (taskid, expectedOutcome) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome"), expectedOutcome);
    };
    ProjectManagementService.prototype.updateExpectedOutcome = function (taskid, expectedOutcome) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome"), expectedOutcome);
    };
    ProjectManagementService.prototype.removeExpectedOutcome = function (taskid, expectedOutcomeId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome/").concat(expectedOutcomeId));
    };
    ProjectManagementService.prototype.addVerificationRun = function (taskid, expectedoutcomeid, verificationRun) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome/").concat(expectedoutcomeid, "/verificationrun"), verificationRun);
    };
    ProjectManagementService.prototype.updateVerificationRun = function (taskid, expectedoutcomeid, verificationRun) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome/").concat(expectedoutcomeid, "/verificationrun"), verificationRun);
    };
    ProjectManagementService.prototype.updateVerificationSteps = function (taskid, expectedoutcomeid, verificationSteps) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome/").concat(expectedoutcomeid, "/verificationsteps"), verificationSteps);
    };
    ProjectManagementService.prototype.deleteVerificationRun = function (taskid, expectedoutcomeid, verificationRunId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/expectedoutcome/").concat(expectedoutcomeid, "/verificationrun/").concat(verificationRunId));
    };
    ProjectManagementService.prototype.updateAdditionalInformation = function (taskId, additionalInformation) {
        return this.nuviotClient.updateWithResponse("/api/pm/task/".concat(taskId, "/additionalinformation"), { contents: additionalInformation });
    };
    ProjectManagementService.prototype.flagTask = function (taskId, reason, notes) {
        var flagTaskRequest = {
            workTaskId: taskId,
            reason: reason,
            notes: notes,
        };
        return this.nuviotClient.post('/api/pm/task/flag', flagTaskRequest);
    };
    ProjectManagementService.prototype.getFlaggedTasks = function () {
        return this.nuviotClient.getListResponse("/api/pm/task/flagged");
    };
    ProjectManagementService.prototype.getLateTasks = function () {
        return this.nuviotClient.getListResponse("/api/pm/task/late");
    };
    ProjectManagementService.prototype.getTasksWithOpenIssues = function () {
        return this.nuviotClient.getListResponse("/api/pm/tasks/openissue");
    };
    ProjectManagementService.prototype.getTasksWithRisks = function () {
        return this.nuviotClient.getListResponse("/api/pm/tasks/openrisks");
    };
    ProjectManagementService.prototype.getBlockedTasks = function () {
        return this.nuviotClient.getListResponse("/api/pm/tasks/blocked");
    };
    ProjectManagementService.prototype.updateDueDate = function (taskId, dueDate) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskId, "/duedate/").concat(dueDate));
    };
    ProjectManagementService.prototype.updateFlagTask = function (taskId, flagId, isOpen, reason, notes) {
        var flagTaskRequest = {
            workTaskId: taskId,
            flaggedTaskId: flagId,
            reason: reason,
            notes: notes,
            isOpen: isOpen,
        };
        return this.nuviotClient.updateWithResponse('/api/pm/task/flag', flagTaskRequest);
    };
    ProjectManagementService.prototype.removeAttachmentFromTask = function (taskId, attachmentId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskId, "/attachment/").concat(attachmentId));
    };
    ProjectManagementService.prototype.removeAttachment = function (taskId, parentType, parentId, attachmentId) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskId, "/").concat(parentType, "/").concat(parentId, "/attachment/").concat(attachmentId));
    };
    ProjectManagementService.prototype.addIssueNote = function (taskid, issueid, issueNote) {
        return this.nuviotClient.postWithResponse("/api/pm/task/".concat(taskid, "/issue/").concat(issueid, "/note"), issueNote);
    };
    ProjectManagementService.prototype.removeIssueNote = function (taskid, issueid, issuenoteid) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/issue/").concat(issueid, "/note/").concat(issuenoteid));
    };
    ProjectManagementService.prototype.addUpstreamTask = function (taskid, upstreamtaskid) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskid, "/upstream/").concat(upstreamtaskid));
    };
    ProjectManagementService.prototype.addDownstreamTask = function (taskid, downstreamtaskid) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskid, "/downstream/").concat(downstreamtaskid));
    };
    ProjectManagementService.prototype.addRelatedTask = function (taskid, relatedtaskid) {
        return this.nuviotClient.request("/api/pm/task/".concat(taskid, "/related/").concat(relatedtaskid));
    };
    ProjectManagementService.prototype.removeUpstreamTask = function (taskid, upstreamtaskid) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/upstream/").concat(upstreamtaskid));
    };
    ProjectManagementService.prototype.removeDownstreamTask = function (taskid, downstreamtaskid) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/downstream/").concat(downstreamtaskid));
    };
    ProjectManagementService.prototype.removeRelatedTask = function (taskid, relatedtaskid) {
        return this.nuviotClient.deleteWithResponse("/api/pm/task/".concat(taskid, "/related/").concat(relatedtaskid));
    };
    ProjectManagementService.prototype.searchTasks = function (projectId, query) {
        return this.nuviotClient.postForListResponse('/api/pm/task/search', {
            query: query,
            projectId: projectId,
        });
    };
    ProjectManagementService.prototype.deleteStatusConfigurations = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.delete("/api/pm/statusconfiguration/".concat(id))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.getStatusConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.getListResponse("/api/pm/statusconfigurations")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.getStatusConfiguration = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.getFormResponse("/api/pm/statusconfiguration/".concat(id))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.addStatusConfigurations = function (statusConfig) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.insert("/api/pm/statusconfiguration", statusConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.updateStatusConfigurations = function (statusConfig) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.update("/api/pm/statusconfiguration", statusConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.createStatusConfiguration = function () {
        return this.nuviotClient.request("/api/pm/statusconfiguration/factory");
    };
    ProjectManagementService.prototype.createStatusOption = function () {
        return this.nuviotClient.request("/api/pm/statusconfiguration/option/factory");
    };
    ProjectManagementService.prototype.createStatusTransition = function () {
        return this.nuviotClient.request("/api/pm/statusconfiguration/statustransition/factory");
    };
    ProjectManagementService.prototype.deleteWorkTaskType = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.delete("/api/pm/statusconfiguration/".concat(id))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.getWorkTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.getListResponse("/api/pm/worktasktypes")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.getWorkTaskType = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.getFormResponse("/api/pm/worktasktype/".concat(id))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.addWorkTaskType = function (workTaskType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.insert("/api/pm/worktasktype", workTaskType)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.updateWorkTaskType = function (workTaskType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nuviotClient.update("/api/pm/worktasktype", workTaskType)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectManagementService.prototype.createWorkTaskType = function () {
        return this.nuviotClient.request("/api/pm/worktasktype/factory");
    };
    ProjectManagementService.prototype.convertToSummary = function (task) {
        var wts = {
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
    };
    ProjectManagementService.prototype.getALMIntegrations = function () {
        return this.nuviotClient.getListResponse("/api/alm/integrations");
    };
    ProjectManagementService.prototype.createALMIntegration = function () {
        return this.nuviotClient.getFormResponse("/api/alm/integration/factory");
    };
    ProjectManagementService.prototype.getALMIntegration = function (id) {
        return this.nuviotClient.getFormResponse("/api/alm/integration/".concat(id));
    };
    ProjectManagementService.prototype.deleteALMIntegration = function (id) {
        return this.nuviotClient.delete("/api/alm/integration/".concat(id));
    };
    ProjectManagementService.prototype.insertALMIntegration = function (integration) {
        return this.nuviotClient.insert("/api/alm/integration", integration);
    };
    ProjectManagementService.prototype.updateALMIntegration = function (integration) {
        return this.nuviotClient.update("/api/alm/integration", integration);
    };
    ProjectManagementService.prototype.getExternalItem = function (id) {
        return this.nuviotClient.request("/api/alm/external/workitem/".concat(id));
    };
    ProjectManagementService.prototype.getALMClientConfiguration = function (id) {
        return this.nuviotClient.request("/api/alm/integration/".concat(id, "/auth"));
    };
    ProjectManagementService.prototype.getImportedWorkTasks = function (id, nextRowKey) {
        if (nextRowKey === void 0) { nextRowKey = ""; }
        if (nextRowKey) {
            var listRequest = {
                nextRowKey: nextRowKey,
            };
            return this.nuviotClient.getListResponse("/api/alm/devops/workitems/".concat(id), listRequest);
        }
        else {
            return this.nuviotClient.getListResponse("/api/alm/devops/workitems/".concat(id));
        }
    };
    ProjectManagementService.prototype.archiveList = function (id) {
        return this.nuviotClient.post("/api/alm/external/workitem/archive", id);
    };
    ProjectManagementService.prototype.archiveExternalItem = function (id) {
        return this.nuviotClient.get("/api/alm/external/workitem/".concat(id, "/archive"));
    };
    ProjectManagementService.prototype.getWorKTaskByExternalId = function (id) {
        return this.nuviotClient.request("/api/pm/task/externalid/".concat(id));
    };
    ProjectManagementService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ProjectManagementService);
    return ProjectManagementService;
}());
exports.ProjectManagementService = ProjectManagementService;
