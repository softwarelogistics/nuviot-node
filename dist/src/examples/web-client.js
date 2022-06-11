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
const utils_1 = require("../core/utils");
const error_reporter_service_1 = require("../services/error-reporter.service");
const network_call_status_service_1 = require("../services/network-call-status-service");
const nuviot_client_service_1 = require("../services/nuviot-client.service");
const user_service_1 = require("../services/user.service");
let http = new utils_1.HttpClient();
let client = new nuviot_client_service_1.NuviotClientService(http, new network_call_status_service_1.NetworkCallStatusService(), new error_reporter_service_1.ErrorReporterService());
let usr = new user_service_1.UserService(http, client, new error_reporter_service_1.ErrorReporterService(), new utils_1.Router(), new utils_1.ActivatedRoute());
function login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield usr.auth(email, password);
        console.log(user.successful);
        console.log(user.result.user.text);
        console.log(user.result.user.id);
    });
}
console.log(login("kevinw@slsys.net", "Test1234"));
