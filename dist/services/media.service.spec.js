"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const media_service_1 = require("./media.service");
describe('Service: Media', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [media_service_1.MediaService]
        });
    });
    it('should ...', (0, testing_1.inject)([media_service_1.MediaService], (service) => {
        expect(service).toBeTruthy();
    }));
});
