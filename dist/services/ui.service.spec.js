"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ui_service_1 = require("./ui.service");
describe('Service: Ui', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [ui_service_1.UiService]
        });
    });
    it('should ...', (0, testing_1.inject)([ui_service_1.UiService], (service) => {
        expect(service).toBeTruthy();
    }));
});
