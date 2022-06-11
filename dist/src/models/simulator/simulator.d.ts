/// <reference path="../core/core.d.ts" />
declare namespace Simulators {
    interface Simulator {
        id: string;
        name: Core.FormField;
        key: Core.FormField;
        deploymentConfiguration: Core.FormField;
        deviceConfiguration: Core.FormField;
        deviceType: Core.FormField;
        pipelineModuleConfiguration: Core.FormField;
        description: Core.FormField;
        credentialStorage: Core.FormField;
        defaultTransport: Core.FormField;
        defaultEndPoint: Core.FormField;
        connectionString: Core.FormField;
        hubName: Core.FormField;
        queueName: Core.FormField;
        topic: Core.FormField;
        subscription: Core.FormField;
        defaultPort: Core.FormField;
        defaultPayloadType: Core.FormField;
        password: Core.FormField;
        userName: Core.FormField;
        tLSSL: Core.FormField;
        accessKey: Core.FormField;
        accessKeyName: Core.FormField;
        anonymous: Core.FormField;
        basicAuth: Core.FormField;
        deviceId: Core.FormField;
    }
    interface MessageTemplate {
        id: string;
        name: Core.FormField;
        key: Core.FormField;
        description: Core.FormField;
        pathAndQueryString: Core.FormField;
        textPayload: Core.FormField;
        binaryPayload: Core.FormField;
        queueName: Core.FormField;
        httpVerb: Core.FormField;
        to: Core.FormField;
        messageId: Core.FormField;
        contentType: Core.FormField;
        topic: Core.FormField;
        qualityOfServiceLevel: Core.FormField;
        retainFlag: Core.FormField;
        appendCR: Core.FormField;
        appendLF: Core.FormField;
        transport: Core.FormField;
        endpoint: Core.FormField;
        geoPoints: Core.FormField;
        port: Core.FormField;
    }
    interface MessageHeader {
        id: string;
        name: Core.FormField;
        key: Core.FormField;
        headerName: Core.FormField;
        value: Core.FormField;
        description: Core.FormField;
    }
    interface MessageDynamicAttribute {
        id: string;
        name: Core.FormField;
        parameterType: Core.FormField;
        key: Core.FormField;
        defaultValue: Core.FormField;
        description: Core.FormField;
    }
    interface MessageProperty {
        key: string;
        value: string;
    }
}
