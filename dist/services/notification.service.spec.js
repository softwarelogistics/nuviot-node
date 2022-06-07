"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const notification_service_1 = require("./notification.service");
describe('Service: Notification', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [notification_service_1.NotificationService]
        });
    });
    it('should ...', (0, testing_1.inject)([notification_service_1.NotificationService], (service) => {
        expect(service).toBeTruthy();
    }));
});
