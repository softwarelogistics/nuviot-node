import { NuviotClientService } from './nuviot-client.service';
export declare class NotificationService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    openWebSocket(channel: string, id: string): Promise<WebSocket>;
}
