"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var core_1 = require("@angular/core");
var NotificationService = /** @class */ (function () {
    function NotificationService(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    NotificationService.prototype.openWebSocket = function (channel, id) {
        var _this = this;
        var uri = "api/wsuri/".concat(channel, "/").concat(id, "/normal");
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.requestForInvokeResultEx(uri)
                .then(function (resp) {
                var notiifcationUri = resp.result;
                var webSocket = new WebSocket(notiifcationUri);
                webSocket.onopen = function (evt) {
                    resolve(webSocket);
                };
                webSocket.onerror = function (evt) {
                    console.log('err');
                    console.log(evt);
                };
            });
        });
        return promise;
    };
    NotificationService = __decorate([
        (0, core_1.Injectable)()
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
