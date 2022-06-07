/// <reference path="core/core.d.ts" />
export declare class DeviceMessageDefinitionView {
    name: Core.FormField;
    key: Core.FormField;
    description: Core.FormField;
}
export declare const msgContentTypeMedia: {
    value: string;
    id: string;
    text: string;
};
export declare const msgContentTypeSevenSegement: {
    value: string;
    id: string;
    text: string;
};
export declare const msgDirectionIn: {
    value: string;
    key: string;
    id: string;
    text: string;
};
export declare const fldFieldTypeContent: {
    value: string;
    key: string;
    id: string;
    text: string;
};
export declare const fldParsedFieldType: {
    value: string;
    key: string;
    id: string;
    text: string;
}[];
export declare const fldParameterTypes: {
    value: string;
    key: string;
    id: string;
    text: string;
}[];
export declare const fldSearchLocationBody: {
    value: string;
    key: string;
    id: string;
    text: string;
};
export declare class DeviceMessageDefinition {
    id: string;
    name: string;
    key: string;
    description: string;
    ownerUser: Core.EntityHeader;
    ownerOrganization: Core.EntityHeader;
    isPublic: boolean;
    messageId: string;
    quotedText: string;
    fields: DeviceMessageDefinitionField[];
    protoBufDefinition: string;
    delimiter: string;
    mediaContentType: string;
    fileExtension: string;
    messageDirection: Core.EntityHeaderEx<string>;
    contentType: Core.EntityHeader;
    binaryParsingStrategy: Core.EntityHeader;
    stringParsingStrategy: Core.EntityHeader;
    stringLengthByteCount?: number;
    endian: Core.EntityHeader;
    regEx: string;
    script: string;
    outputMessageScript: string;
    restMethod: Core.EntityHeader;
    pathAndQueryString: string;
    topic: string;
    framingBytes: any[];
    sampleMessages: any[];
    backgroundColor: string;
    segementColor: string;
    isSevenSegementImage: boolean;
    b64Image: string;
}
export declare class DeviceMessageDefinitionSummary {
    id: string;
    isPublic: boolean;
    name: string;
    key: string;
    description: string;
    direction: string;
}
export declare class DeviceMessageDefinitionField {
    id: string;
    key: string;
    name: string;
    fieldIndex?: number;
    searchLocation: Core.EntityHeaderEx<string>;
    storageType: Core.EntityHeaderEx<string>;
    unitSet?: Core.EntityHeader;
    stateSet?: Core.EntityHeader;
    regExValueSelector?: string;
    quotedText?: string;
    delimiterText?: string;
    contentType: Core.EntityHeader;
    parsedBinaryFieldType?: Core.EntityHeader;
    stringLengthByteCount?: number;
    decimalScaler: number;
    binaryParsingStrategy?: Core.EntityHeader;
    stringParsingStrategy?: Core.EntityHeader;
    endian?: Core.EntityHeader;
    parsedStringFieldType?: Core.EntityHeader;
    regExGroupName?: string;
    latRegExGroupName?: string;
    lonRegExGroupName?: string;
    jsonPath?: string;
    latJsonPath?: string;
    lonJsonPath?: string;
    length?: number;
    xPath?: string;
    latXPath?: string;
    lonXPath?: string;
    latQueryStringField?: string;
    lonQueryStringField?: string;
    headerName?: string;
    queryStringField?: string;
    pathLocator?: string;
    topicLocator?: string;
    defaultValue?: string;
    dateTimeZone?: Core.EntityHeader;
    notes?: string;
    regExValidation?: string;
    isRequired: boolean;
    minValue?: number;
    maxValue?: number;
    segments: DisplayImageSegment[];
}
export declare class DisplayImageSegment {
    top: number;
    left: number;
    width: number;
    height: number;
    b64Image: string;
}
export declare class SevenSegementParseResult {
    messageFieldId: string;
    messageFieldKey: string;
    value: string;
}
