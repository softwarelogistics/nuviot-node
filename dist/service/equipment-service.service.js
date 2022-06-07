"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var EquipmentService = /** @class */ (function () {
    function EquipmentService(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._equipment$ = new ReplaySubject_1.ReplaySubject();
    }
    EquipmentService.prototype.loadEquipment = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/equipment/".concat(id, "/detail"))
                .then(function (resp) {
                _this.setEquipment(resp);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    EquipmentService.prototype.onEquipment = function () {
        return this._equipment$.asObservable();
    };
    EquipmentService.prototype.setEquipment = function (equipment) {
        this._equipment = equipment;
        this._equipment$.next(equipment);
    };
    EquipmentService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], EquipmentService);
    return EquipmentService;
}());
exports.EquipmentService = EquipmentService;
