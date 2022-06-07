"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var project_management_service_1 = require("./project-management.service");
describe('Service: ProjectManagement', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [project_management_service_1.ProjectManagementService]
        });
    });
    it('should ...', (0, testing_1.inject)([project_management_service_1.ProjectManagementService], function (service) {
        expect(service).toBeTruthy();
    }));
});
