"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_service_1 = require("./user.service");
describe('Service: User', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_service_1.UserService]
        });
    });
    it('should ...', (0, testing_1.inject)([user_service_1.UserService], function (service) {
        expect(service).toBeTruthy();
    }));
});
