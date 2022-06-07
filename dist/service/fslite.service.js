"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsliteService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var FsliteService = /** @class */ (function () {
    function FsliteService(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._templates$ = new ReplaySubject_1.ReplaySubject();
        this._template$ = new ReplaySubject_1.ReplaySubject();
        this._board$ = new ReplaySubject_1.ReplaySubject();
        this._boards$ = new ReplaySubject_1.ReplaySubject();
        this._tickets$ = new ReplaySubject_1.ReplaySubject();
        this._ticket$ = new ReplaySubject_1.ReplaySubject();
        this._partsKit$ = new ReplaySubject_1.ReplaySubject();
    }
    FsliteService.prototype.loadTickets = function (nextRowKey) {
        var _this = this;
        if (nextRowKey === void 0) { nextRowKey = null; }
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/tickets", { pageSize: 50, nextRowKey: nextRowKey })
                .then(function (resp) {
                _this.setTickets(resp.model);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTicketsForBoard = function (boardId, nextRowKey) {
        var _this = this;
        if (nextRowKey === void 0) { nextRowKey = null; }
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/".concat(boardId, "/tickets"), { pageSize: 50, nextRowKey: nextRowKey })
                .then(function (resp) {
                _this.setTickets(resp.model);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTicketsForDevice = function (deviceId, nextRowKey) {
        var _this = this;
        if (nextRowKey === void 0) { nextRowKey = null; }
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/ticket/device/".concat(deviceId), { pageSize: 50, nextRowKey: nextRowKey })
                .then(function (resp) {
                _this.setTickets(resp.model);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTicketsWithFilter = function (filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/tickets")
                .then(function (resp) {
                _this.setTickets(resp.model);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTemplate = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/fslite/tickets/template/".concat(id, "/detail"))
                .then(function (resp) {
                _this.setTemplate(resp);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadBoards = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/serviceboards")
                .then(function (resp) {
                _this.setTemplates(resp.model);
                resolve(resp.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTemplates = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/fslite/tickets/templates")
                .then(function (resp) {
                _this.setTemplates(resp.model);
                resolve(resp.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.createTicket = function (ticketRequest) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.insert("/api/fslite/ticket/create", ticketRequest)
                .then(function (resp) {
                var ticketResponse = resp;
                _this.setTicket(ticketResponse.result);
                resolve(ticketResponse.result);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.addTicketNote = function (ticketId, note) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.postWithResponse("/api/fslite/ticket/".concat(ticketId, "/note"), note)
                .then(function (resp) {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not add ticket note');
                }
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.changeTicketStatus = function (ticketId, note) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.postWithResponse("/api/fslite/ticket/".concat(ticketId, "/status"), note)
                .then(function (resp) {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set status');
                }
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.setTicketViewedStatus = function (ticketId, viewedStatus) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/fslite/ticket/".concat(ticketId, "/viewed/").concat(viewedStatus))
                .then(function (resp) {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set viewed status');
                }
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.setTicketClosedStatus = function (ticketId, closedStatus) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/fslite/ticket/".concat(ticketId, "/closed/").concat(closedStatus))
                .then(function (resp) {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set closed status');
                }
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadTicket = function (ticketId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getFormResponse("/api/fslite/ticket/".concat(ticketId))
                .then(function (ticketResponse) {
                _this.setTicket(ticketResponse.model);
                resolve(ticketResponse.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.loadPartsKit = function (partsKitId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/fslite/partskit/".concat(partsKitId, "/detail"))
                .then(function (partsKitResponse) {
                _this.setPartsKit(partsKitResponse);
                resolve(partsKitResponse);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.updateAssignedTo = function (ticketId, assignedTo) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.post("/api/fslite/ticket/".concat(ticketId, "/assignedto"), assignedTo)
                .then(function (resp) {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not update user.');
                }
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.deleteTicket = function (ticketId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.delete("/api/fslite/ticket/".concat(ticketId))
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    FsliteService.prototype.onPartsKit = function () {
        return this._partsKit$.asObservable();
    };
    FsliteService.prototype.onBoard = function () {
        return this._board$.asObservable();
    };
    FsliteService.prototype.onBoards = function () {
        return this._boards$.asObservable();
    };
    FsliteService.prototype.onTicket = function () {
        return this._ticket$.asObservable();
    };
    FsliteService.prototype.onTickets = function () {
        return this._tickets$.asObservable();
    };
    FsliteService.prototype.onTemplates = function () {
        return this._templates$.asObservable();
    };
    FsliteService.prototype.onTemplate = function () {
        return this._template$.asObservable();
    };
    FsliteService.prototype.setBoard = function (board) {
        this._board = board;
        this._board$.next(board);
    };
    FsliteService.prototype.setBoards = function (boards) {
        this._boards = boards;
        this._boards$.next(boards);
    };
    FsliteService.prototype.setTemplate = function (template) {
        this._template = template;
        this._template$.next(template);
    };
    FsliteService.prototype.setTicket = function (ticket) {
        this._ticket = ticket;
        this._ticket$.next(ticket);
    };
    FsliteService.prototype.setTickets = function (tickets) {
        this._tickets = tickets;
        this._tickets$.next(tickets);
    };
    FsliteService.prototype.setTemplates = function (templats) {
        this._templates = templats;
        this._templates$.next(templats);
    };
    FsliteService.prototype.setPartsKit = function (partsKit) {
        this._partsKit = partsKit;
        this._partsKit$.next(partsKit);
    };
    FsliteService.prototype.getBoard = function () {
        return this._board;
    };
    FsliteService.prototype.getBoards = function () {
        return this._boards;
    };
    FsliteService.prototype.getTicket = function () {
        return this._ticket;
    };
    FsliteService.prototype.getTickets = function () {
        return this._tickets;
    };
    FsliteService.prototype.getTemplateSummaries = function () {
        return this._templates;
    };
    FsliteService.prototype.getPartsKit = function () {
        return this._partsKit;
    };
    FsliteService = __decorate([
        (0, core_1.Injectable)()
    ], FsliteService);
    return FsliteService;
}());
exports.FsliteService = FsliteService;
