"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var notification_service_1 = require("./notification.service");
describe('Service: Notification', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [notification_service_1.NotificationService]
        });
    });
    it('should ...', (0, testing_1.inject)([notification_service_1.NotificationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
