"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var media_service_1 = require("./media.service");
describe('Service: Media', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [media_service_1.MediaService]
        });
    });
    it('should ...', (0, testing_1.inject)([media_service_1.MediaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
