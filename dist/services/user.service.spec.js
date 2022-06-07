"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_service_1 = require("./user.service");
describe('Service: User', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [user_service_1.UserService]
        });
    });
    it('should ...', (0, testing_1.inject)([user_service_1.UserService], (service) => {
        expect(service).toBeTruthy();
    }));
});
