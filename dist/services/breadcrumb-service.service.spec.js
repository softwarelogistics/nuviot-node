"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const breadcrumb_service_service_1 = require("./breadcrumb-service.service");
describe('BreadcrumbServiceService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(breadcrumb_service_service_1.BreadcrumbServiceService);
        expect(service).toBeTruthy();
    });
});
