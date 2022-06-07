"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    openWebSocket(channel, id) {
        const uri = `api/wsuri/${channel}/${id}/normal`;
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.requestForInvokeResultEx(uri)
                .then(resp => {
                const notiifcationUri = resp.result;
                const webSocket = new WebSocket(notiifcationUri);
                webSocket.onopen = (evt) => {
                    resolve(webSocket);
                };
                webSocket.onerror = (evt) => {
                    console.log('err');
                    console.log(evt);
                };
            });
        });
        return promise;
    }
}
exports.NotificationService = NotificationService;
