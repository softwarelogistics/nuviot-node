"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var breadcrumb_service_service_1 = require("./breadcrumb-service.service");
describe('BreadcrumbServiceService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(breadcrumb_service_service_1.BreadcrumbServiceService);
        expect(service).toBeTruthy();
    });
});
