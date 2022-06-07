"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const equipment_service_service_1 = require("./equipment-service.service");
describe('Service: EquipmentService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [equipment_service_service_1.EquipmentServiceService]
        });
    });
    it('should ...', (0, testing_1.inject)([equipment_service_service_1.EquipmentServiceService], (service) => {
        expect(service).toBeTruthy();
    }));
});
