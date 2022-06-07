/// <reference path="../core/core.d.ts" />
declare namespace Devices {
    interface DeviceView {
        id: string;
        status: Core.FormField;
        name: Core.FormField;
        deviceId: Core.FormField;
        deviceConfiguration: Core.FormField;
        deviceType: Core.FormField;
        ownerOrganization: Core.FormField;
        location: Core.FormField;
        deviceURI: Core.FormField;
        showDiagnostics: Core.FormField;
        serialNumber: Core.FormField;
        firmwareVersion: Core.FormField;
        isConnected: Core.FormField;
        lastContact: Core.FormField;
        primaryAccessKey: Core.FormField;
        secondaryAccessKey: Core.FormField;
        geoLocation: Core.FormField;
        heading: Core.FormField;
        speed: Core.FormField;
        customStatus: Core.FormField;
        debugMode: Core.FormField;
        propertiesMetaData: Core.FormField;
        properties: Core.FormField;
    }
    interface DeviceRepoView {
        name: Core.FormField;
        key: Core.FormField;
        description: Core.FormField;
    }
    interface DeviceSummaryData {
        id: string;
        deviceId: string;
        name: string;
        lastContact: string;
        deviceType: Core.EntityHeader;
        deviceConfiguration: Core.EntityHeader;
        deviceRepository: Core.EntityHeader;
        properties: Core.AttributeValue[];
        states: Core.AttributeValue[];
        attributes: Core.AttributeValue[];
        speed: number;
        heading: number;
        geoLocation: Geolocation;
        status: Core.EntityHeader;
    }
    interface DeviceRepoSummary extends Core.IKeyNamedModel {
        repositoryType: string;
        id: string;
        isPublic: boolean;
        name: string;
        key: string;
        description: string;
    }
    interface DeviceGroupSummary extends Core.IKeyNamedModel {
        id: string;
        isPublic: boolean;
        name: string;
        key: string;
        description: string;
        repoId: string;
        repoName: string;
    }
    interface DeviceGroup extends Core.IKeyNamedModel {
        id: string;
        isPublic: boolean;
        name: string;
        deviceRepository: Core.EntityHeader;
        key: string;
        description: string;
        devices: DeviceGroupEntry[];
    }
    interface DeviceGroupView {
        id: string;
        isPublic: boolean;
        name: string;
        key: string;
        description: string;
    }
    interface DeviceGroupEntry {
        id: string;
        deviceUniqueId: string;
        dateAdded: string;
        addedBy: Core.EntityHeader;
        name: string;
        deviceId: string;
        deviceType: Core.EntityHeader;
        deviceConfiguration: Core.EntityHeader;
    }
    interface DeviceRepo extends Core.IKeyNamedModel {
        id: string;
        name: string;
        key: string;
        description: string;
        deviceCapacity: Core.EntityHeader;
        storageCapacity: Core.EntityHeader;
        subscription: Core.EntityHeader;
        repositoryType: Core.EntityHeader;
        isPublic: boolean;
    }
    interface DeviceUpdate {
        deviceId: string;
        name: string;
        id: string;
        geoLocation: Core.GeoLocation;
        heading: number;
        serialNumber: string;
        lastContact: string;
        status: Core.EntityHeader;
        customStatus: Core.EntityHeader;
        firmwareVersion: string;
        attributes: Core.AttributeValue[];
        states: Core.AttributeValue[];
        properties: Core.AttributeValue[];
    }
    interface DeviceStatus {
        hasValue: boolean;
        value: number;
        id: string;
        text: string;
    }
    interface DeviceSummary {
        id: string;
        deviceName: string;
        deviceId: string;
        deviceType: string;
        deviceConfiguration: string;
    }
    interface DeviceSelectedEventArgs {
        deviceRepo: DeviceRepoSummary;
        deviceSummary: DeviceSummary;
    }
    interface DeviceGroupSelectedEventArgs {
        deviceRepo: DeviceRepoSummary;
        deviceGroupSummary: DeviceGroupSummary;
    }
    interface DeviceUser {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
        device: DeviceDetail;
    }
    interface PropertyMetaData {
        id: string;
        defaultValue: string;
        fieldType: Core.EntityHeader;
        helpText: string;
        name: string;
        regEx: string;
        key: string;
        label: string;
        stateSet: Core.EntityHeaderEx<Core.StateSet>;
        unitSet: Core.EntityHeaderEx<Core.UnitSet>;
        isReadOnly: boolean;
        isRequired: boolean;
        isUserConfigurable: boolean;
    }
    interface DeviceConnectionEvent {
        deviceId: string;
        timeStamp: string;
        firmwareSKU: string;
        firmwareRevision: string;
        rssi: number;
        reconnect: boolean;
    }
    interface DeviceProperty {
        metaData: PropertyMetaData;
        property: Core.AttributeValue;
    }
    class InputCommandParameterValue {
        parameter: Devices.InputCommandParameter;
        value: string;
        isChecked: boolean;
    }
    interface State {
        key: string;
        name: string;
    }
    interface StateSet {
        id: string;
        key: string;
        name: string;
        states: State[];
    }
    interface InputCommandParameter extends Core.IKeyNamedModel {
        name: string;
        key: string;
        parameterLocation: Core.EntityHeader;
        parameterType: Core.EntityHeader;
        stateSet: Core.EntityHeaderEx<StateSet>;
        unitSet: any[];
    }
    interface InputCommand extends Core.IKeyNamedModel {
        name: string;
        endpointType: Core.EntityHeader;
        key: string;
        id: string;
        description: string;
        parameters: InputCommandParameter[];
    }
    interface InputCommandEndPoint {
        endPoint: string;
        inputCommand: InputCommand;
    }
    interface DeviceTypeSummary {
        id: string;
        name: string;
        key: string;
        description?: string;
        defaultDeviceConfigId?: string;
        defaultDeviceConfigName?: string;
    }
    interface FirmwareSummary {
        id: string;
        name: string;
    }
    interface FirmwareDetail {
        id: string;
        name: string;
        deviceType: string;
        firmwareSku: string;
        defaultRevision: Core.EntityHeader;
        description: string;
        revisions: FirmwareRevision[];
    }
    interface FirmwareView {
        name: Core.FormField;
        deviceType: Core.FormField;
        firmwareSku: Core.FormField;
        defaultRevision: Core.FormField;
        description: Core.FormField;
        revisions: Core.FormField;
    }
    interface FirmwareRevision {
        id: string;
        versionCode: string;
        timeStamp: string;
        status: Core.EntityHeader;
        notes: string;
    }
    interface FirmwareDownloadRequest {
        downloadId: string;
        expired: boolean;
        status: string;
        firmwareName: string;
        timestamp: string;
        percentRequested: number;
        error: string;
    }
    interface DeviceConfigSummary {
        id: string;
        name: string;
        key: string;
    }
    interface DeviceDetailView {
        name: Core.FormField;
        deviceId: Core.FormField;
        deviceType: Core.FormField;
    }
    interface MediaItem {
        itemId: string;
        deviceId: string;
        timeStamp: string;
        contentType: string;
        title: string;
        fileName: string;
        length: string;
    }
    interface DeviceLog {
        dateStamp: string;
        entryType: string;
        source: string;
        entry: string;
    }
    interface DeviceNote {
        title: string;
        notes: string;
        creationDate: string;
        lastUpdateDate: string;
        createdBy: Core.EntityHeader;
        lastUpdatedBy: Core.EntityHeader;
    }
    interface DeviceTypeResource {
        id: string;
        key: string;
        name: string;
        fileName: string;
        link: string;
        resourceType: Core.EntityHeader;
        description: string;
        mimeType: string;
        contentSize: number;
        contentSizeDisplay: string;
        isFileUpload: boolean;
    }
    interface BillOfMaterialItem {
        id: string;
        partNumber: string;
        name: string;
        manufacturer: string;
        description: string;
        assemblyNumber: string;
        quantity: number;
        link: string;
        bomItemResources: DeviceTypeResource[];
    }
    interface DeviceType {
        deviceResources: DeviceTypeResource[];
        billOfMaterial: BillOfMaterialItem[];
    }
    interface DeviceTwinDetail {
        timestamp: string;
        details: string;
    }
    interface DeviceException {
        errorCode: string;
        timestamp: string;
        details: string;
    }
    interface DeviceError {
        firstSeen: string;
        count: number;
        timestamp: string;
        expires: string;
        nextNotification: string;
        deviceErrorCode: string;
        lastDetails: string;
    }
    interface Sensor {
        id: string;
        key: string;
        name: string;
        description: string;
        address: string;
        attributeType: Core.EntityHeader;
        technology: Core.EntityHeader;
        lastUpdated: string;
        sensorDefinition: Core.EntityHeader;
        sensorType: number;
        portIndexSelection: Core.EntityHeader;
        portIndex: number;
        deviceScaler: number;
        calibration: number;
        zero: number;
        lowThreshold: number;
        highThreshold: number;
        lowValueErrorCode: string;
        highValueErrorCode: string;
        alertsEnabled: boolean;
        state: Core.EntityHeader;
        unitSet: Core.EntityHeader;
        unitsLabel: string;
        value: string;
    }
    interface SensorView {
        key: Core.FormField;
        name: Core.FormField;
        description: Core.FormField;
        address: Core.FormField;
        attributeType: Core.FormField;
        technology: Core.FormField;
        sensorDefinition: Core.FormField;
        sensorType: Core.FormField;
        portIndexSelection: Core.FormField;
        deviceScaler: Core.FormField;
        portIndex: number;
        calibration: Core.FormField;
        zero: Core.FormField;
        lowThreshold: Core.FormField;
        highThreshold: Core.FormField;
        lowValueErrorCode: Core.FormField;
        highValueErrorCode: Core.FormField;
        alertsEnabled: Core.FormField;
        state: Core.FormField;
        unitSet: Core.FormField;
        unitsLabel: Core.FormField;
        value: Core.FormField;
    }
    interface DeviceDetail {
        databaseName: string;
        entityType: string;
        creationDate: string;
        lastUpdatedDate: string;
        createdBy: Core.EntityHeader;
        lastUpdatedBy: Core.EntityHeader;
        deviceRepository: Core.EntityHeader;
        status: DeviceStatus;
        id: string;
        name: string;
        deviceId: string;
        sensorCollection: Sensor[];
        deviceTwinDetails: DeviceTwinDetail[];
        deviceConfiguration: Core.EntityHeader;
        deviceType: Core.EntityHeaderEx<DeviceType>;
        isPublic: boolean;
        ownerOrganization: Core.EntityHeader;
        desiredFirmware?: Core.EntityHeader;
        desiredFirmwareRevision?: Core.EntityHeader;
        actualFirmware?: string;
        actualFirmwareRevision?: string;
        actualFirmwareDate?: string;
        location?: any;
        ownerUser?: any;
        deviceURI: string;
        deviceLabel: string;
        deviceIdLabel: string;
        deviceNameLabel: string;
        deviceTypeLabel: string;
        showDiagnostics?: any;
        serialNumber: string;
        firmwareVersion?: any;
        isConnected?: any;
        lastContact?: any;
        primaryAccessKey: string;
        secondaryAccessKey: string;
        geoLocation?: Core.GeoLocation;
        heading: number;
        speed: number;
        customStatus?: any;
        debugMode: boolean;
        propertiesMetaData: PropertyMetaData[];
        propertyBag: any[];
        properties?: Core.AttributeValue[];
        states: any[];
        attributes: any[];
        messageValues?: any;
        inputCommandEndPoints: any[];
        notes: DeviceNote[];
        errors: DeviceError[];
    }
}
