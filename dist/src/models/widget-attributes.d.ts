import { DataStreamField } from './reporting';
export declare class WidgetAttributes {
    populationStrategy?: Core.EntityHeader;
    repoId?: string;
    repoName?: string;
}
export declare class WidgetDevicesAttributes extends WidgetAttributes {
    deviceGroupName?: string;
    deviceGroupId?: string;
}
export declare class WidgetDeviceViewAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
    isSystemUserView: boolean;
}
export declare class WidgetDeviceExplorerAttributes extends WidgetAttributes {
    repoId?: string;
    repoName?: string;
}
export declare class DataSteamField {
    id: string;
    key: string;
    label: string;
    fieldType: string;
}
export declare class WidgetChartTypes {
    static chartTypes: Array<Core.EntityHeader>;
}
export declare class WidgetChartAttributes extends WidgetAttributes {
    static chartPeriod: Array<Core.EntityHeader>;
    static chartGroupBy: Array<Core.EntityHeader>;
    timestampFieldName: string;
    showTimePicker: boolean;
    chartType?: Core.EntityHeader;
    initialGroupBy?: Core.EntityHeader;
    initialChartDateRangePeriod?: Core.EntityHeader;
    initialChartDateRange: number;
    showGroupByPicker: boolean;
    dataStreamId?: string;
    dataStreamName?: string;
    dataStreamType?: string;
    dataStreamTypeKey?: string;
    dataStreamFields?: DataStreamField[];
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetGaugeDataSources {
    static dataSources: Array<Core.EntityHeader>;
}
export declare class WidgetGaugeTypes {
    static gaugeTypes: Array<Core.EntityHeader>;
}
export declare class WidgetGaugeAttributes extends WidgetAttributes {
    gaugeType?: Core.EntityHeader;
    dataSource?: Core.EntityHeader;
    sensorIndex: number;
    title: string;
    units: string;
    min: number;
    lowWarning: number;
    lowOK: number;
    highOK: number;
    highWarning: number;
    max: number;
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceActionAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceAttributesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceErrorsAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDevicePropertiesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDevicePhotoAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceReportsAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDateRangePickerAttributes extends WidgetAttributes {
    dateOnly?: boolean;
    tiemOnly?: boolean;
    allowFuture?: boolean;
    maxDays?: number;
}
export declare class WidgetDeviceDataAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
    dataStreamId?: string;
    dataStreamName?: string;
    dataStreamType?: string;
    dataStreamTypeKey?: string;
    dataStreamFields?: DataStreamField[];
}
export declare class WidgetDeviceLogsAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceConnectionLogAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceNotesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetFSLiteTicketAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceBomAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceResourcesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetDeviceTicketAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetPropertiesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetAttributesAttributes extends WidgetAttributes {
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
}
export declare class WidgetGeoAttributes extends WidgetAttributes {
    centerLatitude?: number;
    centerLongitude?: number;
    deviceUniqueId?: string;
    deviceId?: string;
    deviceName?: string;
    deviceGroupName?: string;
    deviceGroupId?: string;
}
