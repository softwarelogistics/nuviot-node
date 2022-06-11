import { Observable } from 'rxjs';
import { NuviotClientService } from './nuviot-client.service';
export declare class EquipmentService {
    private nuviotClient;
    private _equipment;
    private _equipment$;
    constructor(nuviotClient: NuviotClientService);
    loadEquipment(id: string): Promise<FSLite.Equipment>;
    onEquipment(): Observable<FSLite.Equipment>;
    setEquipment(equipment: FSLite.Equipment): void;
}
