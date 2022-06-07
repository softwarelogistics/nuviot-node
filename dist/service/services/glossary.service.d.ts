import { NuviotClientService } from './nuviot-client.service';
export declare class GlossaryService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    getGlossaries(): Promise<Glossary.GlossarySummary[]>;
    createGlossary(): Promise<Core.FormResult<Glossary.Glossary, Glossary.GlossaryView>>;
    getGlossary(id: string): Promise<Core.FormResult<Glossary.Glossary, Glossary.GlossaryView>>;
    addGlossary(glossary: Glossary.Glossary): Promise<Core.InvokeResultEx<unknown>>;
    addNewGlossary(glossary: Glossary.Glossary): Promise<Core.InvokeResultEx<unknown>>;
    updateGlossary(glossary: Glossary.Glossary): Promise<Core.InvokeResult>;
}
