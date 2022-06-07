"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsliteService = void 0;
const rxjs_1 = require("rxjs");
class FsliteService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._templates$ = new rxjs_1.ReplaySubject();
        this._template$ = new rxjs_1.ReplaySubject();
        this._board$ = new rxjs_1.ReplaySubject();
        this._boards$ = new rxjs_1.ReplaySubject();
        this._tickets$ = new rxjs_1.ReplaySubject();
        this._ticket$ = new rxjs_1.ReplaySubject();
        this._partsKit$ = new rxjs_1.ReplaySubject();
    }
    loadTickets(nextRowKey = null) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/tickets`, { pageSize: 50, nextRowKey: nextRowKey })
                .then(resp => {
                this.setTickets(resp.model);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTicketsForBoard(boardId, nextRowKey = null) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/${boardId}/tickets`, { pageSize: 50, nextRowKey: nextRowKey })
                .then(resp => {
                this.setTickets(resp.model);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTicketsForDevice(deviceId, nextRowKey = null) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/ticket/device/${deviceId}`, { pageSize: 50, nextRowKey: nextRowKey })
                .then(resp => {
                this.setTickets(resp.model);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTicketsWithFilter(filter) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/tickets`)
                .then(resp => {
                this.setTickets(resp.model);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTemplate(id) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/fslite/tickets/template/${id}/detail`)
                .then(resp => {
                this.setTemplate(resp);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadBoards() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/serviceboards`)
                .then(resp => {
                this.setTemplates(resp.model);
                resolve(resp.model);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTemplates() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/fslite/tickets/templates`)
                .then(resp => {
                this.setTemplates(resp.model);
                resolve(resp.model);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    createTicket(ticketRequest) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.insert(`/api/fslite/ticket/create`, ticketRequest)
                .then(resp => {
                const ticketResponse = resp;
                this.setTicket(ticketResponse.result);
                resolve(ticketResponse.result);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    addTicketNote(ticketId, note) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.postWithResponse(`/api/fslite/ticket/${ticketId}/note`, note)
                .then(resp => {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not add ticket note');
                }
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    changeTicketStatus(ticketId, note) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.postWithResponse(`/api/fslite/ticket/${ticketId}/status`, note)
                .then(resp => {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set status');
                }
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    setTicketViewedStatus(ticketId, viewedStatus) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/fslite/ticket/${ticketId}/viewed/${viewedStatus}`)
                .then(resp => {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set viewed status');
                }
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    setTicketClosedStatus(ticketId, closedStatus) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/fslite/ticket/${ticketId}/closed/${closedStatus}`)
                .then(resp => {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not set closed status');
                }
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadTicket(ticketId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getFormResponse(`/api/fslite/ticket/${ticketId}`)
                .then(ticketResponse => {
                this.setTicket(ticketResponse.model);
                resolve(ticketResponse.model);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadPartsKit(partsKitId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/fslite/partskit/${partsKitId}/detail`)
                .then(partsKitResponse => {
                this.setPartsKit(partsKitResponse);
                resolve(partsKitResponse);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    updateAssignedTo(ticketId, assignedTo) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.post(`/api/fslite/ticket/${ticketId}/assignedto`, assignedTo)
                .then(resp => {
                if (resp.successful) {
                    resolve(resp.result);
                }
                else {
                    reject('could not update user.');
                }
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    deleteTicket(ticketId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.delete(`/api/fslite/ticket/${ticketId}`)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    onPartsKit() {
        return this._partsKit$.asObservable();
    }
    onBoard() {
        return this._board$.asObservable();
    }
    onBoards() {
        return this._boards$.asObservable();
    }
    onTicket() {
        return this._ticket$.asObservable();
    }
    onTickets() {
        return this._tickets$.asObservable();
    }
    onTemplates() {
        return this._templates$.asObservable();
    }
    onTemplate() {
        return this._template$.asObservable();
    }
    setBoard(board) {
        this._board = board;
        this._board$.next(board);
    }
    setBoards(boards) {
        this._boards = boards;
        this._boards$.next(boards);
    }
    setTemplate(template) {
        this._template = template;
        this._template$.next(template);
    }
    setTicket(ticket) {
        this._ticket = ticket;
        this._ticket$.next(ticket);
    }
    setTickets(tickets) {
        this._tickets = tickets;
        this._tickets$.next(tickets);
    }
    setTemplates(templats) {
        this._templates = templats;
        this._templates$.next(templats);
    }
    setPartsKit(partsKit) {
        this._partsKit = partsKit;
        this._partsKit$.next(partsKit);
    }
    getBoard() {
        return this._board;
    }
    getBoards() {
        return this._boards;
    }
    getTicket() {
        return this._ticket;
    }
    getTickets() {
        return this._tickets;
    }
    getTemplateSummaries() {
        return this._templates;
    }
    getPartsKit() {
        return this._partsKit;
    }
}
exports.FsliteService = FsliteService;
