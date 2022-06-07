"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentService = void 0;
const rxjs_1 = require("rxjs");
class EquipmentService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._equipment$ = new rxjs_1.ReplaySubject();
    }
    loadEquipment(id) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/equipment/${id}/detail`)
                .then(resp => {
                this.setEquipment(resp);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    onEquipment() {
        return this._equipment$.asObservable();
    }
    setEquipment(equipment) {
        this._equipment = equipment;
        this._equipment$.next(equipment);
    }
}
exports.EquipmentService = EquipmentService;
