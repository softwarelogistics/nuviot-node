"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const route_service_1 = require("./route.service");
describe('Service: Route', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [route_service_1.RouteService]
        });
    });
    it('should ...', (0, testing_1.inject)([route_service_1.RouteService], (service) => {
        expect(service).toBeTruthy();
    }));
});
