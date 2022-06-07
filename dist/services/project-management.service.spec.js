"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const project_management_service_1 = require("./project-management.service");
describe('Service: ProjectManagement', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [project_management_service_1.ProjectManagementService]
        });
    });
    it('should ...', (0, testing_1.inject)([project_management_service_1.ProjectManagementService], (service) => {
        expect(service).toBeTruthy();
    }));
});
