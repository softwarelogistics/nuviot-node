"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var nuviot_client_service_1 = require("./nuviot-client.service");
describe('Service: NuviotClient', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [nuviot_client_service_1.NuviotClientService]
        });
    });
    it('should ...', (0, testing_1.inject)([nuviot_client_service_1.NuviotClientService], function (service) {
        expect(service).toBeTruthy();
    }));
});
