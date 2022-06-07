import { NuviotClientService } from './nuviot-client.service';
export declare class LabelsService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    getLabeledEntities(id: string): Promise<Core.ListResponse<Core.LabeledEntity>>;
    getLabelSetForOrg(): Promise<Core.InvokeResultEx<Core.LabelSet>>;
    addLabel(label: Core.Label): Promise<Core.InvokeResultEx<Core.LabelSet>>;
    updateLabel(label: Core.Label): Promise<Core.InvokeResultEx<Core.LabelSet>>;
}
