"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var guide_service_1 = require("./guide.service");
describe('Service: Guide', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [guide_service_1.GuideService]
        });
    });
    it('should ...', (0, testing_1.inject)([guide_service_1.GuideService], function (service) {
        expect(service).toBeTruthy();
    }));
});
