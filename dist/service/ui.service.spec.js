"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ui_service_1 = require("./ui.service");
describe('Service: Ui', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ui_service_1.UiService]
        });
    });
    it('should ...', (0, testing_1.inject)([ui_service_1.UiService], function (service) {
        expect(service).toBeTruthy();
    }));
});
