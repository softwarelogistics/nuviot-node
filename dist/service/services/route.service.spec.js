"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var route_service_1 = require("./route.service");
describe('Service: Route', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [route_service_1.RouteService]
        });
    });
    it('should ...', (0, testing_1.inject)([route_service_1.RouteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
