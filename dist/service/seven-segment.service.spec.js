"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var seven_segment_service_1 = require("./seven-segment.service");
describe('Service: SevenSegment', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [seven_segment_service_1.SevenSegmentService]
        });
    });
    it('should ...', (0, testing_1.inject)([seven_segment_service_1.SevenSegmentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
