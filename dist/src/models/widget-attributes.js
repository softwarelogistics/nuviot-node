"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGeoAttributes = exports.WidgetAttributesAttributes = exports.WidgetPropertiesAttributes = exports.WidgetDeviceTicketAttributes = exports.WidgetDeviceResourcesAttributes = exports.WidgetDeviceBomAttributes = exports.WidgetFSLiteTicketAttributes = exports.WidgetDeviceNotesAttributes = exports.WidgetDeviceConnectionLogAttributes = exports.WidgetDeviceLogsAttributes = exports.WidgetDeviceDataAttributes = exports.WidgetDateRangePickerAttributes = exports.WidgetDeviceReportsAttributes = exports.WidgetDevicePhotoAttributes = exports.WidgetDevicePropertiesAttributes = exports.WidgetDeviceErrorsAttributes = exports.WidgetDeviceAttributesAttributes = exports.WidgetDeviceActionAttributes = exports.WidgetGaugeAttributes = exports.WidgetGaugeTypes = exports.WidgetGaugeDataSources = exports.WidgetChartAttributes = exports.WidgetChartTypes = exports.DataSteamField = exports.WidgetDeviceExplorerAttributes = exports.WidgetDeviceViewAttributes = exports.WidgetDevicesAttributes = exports.WidgetAttributes = void 0;
class WidgetAttributes {
}
exports.WidgetAttributes = WidgetAttributes;
class WidgetDevicesAttributes extends WidgetAttributes {
}
exports.WidgetDevicesAttributes = WidgetDevicesAttributes;
class WidgetDeviceViewAttributes extends WidgetAttributes {
}
exports.WidgetDeviceViewAttributes = WidgetDeviceViewAttributes;
class WidgetDeviceExplorerAttributes extends WidgetAttributes {
}
exports.WidgetDeviceExplorerAttributes = WidgetDeviceExplorerAttributes;
class DataSteamField {
}
exports.DataSteamField = DataSteamField;
class WidgetChartTypes {
}
exports.WidgetChartTypes = WidgetChartTypes;
WidgetChartTypes.chartTypes = [
    { 'id': 'line', text: 'Line Chart' },
    { 'id': 'bar', text: 'Bar Chart' },
    { 'id': 'pie', text: 'Pie Chart' }
];
class WidgetChartAttributes extends WidgetAttributes {
}
exports.WidgetChartAttributes = WidgetChartAttributes;
WidgetChartAttributes.chartPeriod = [
    { 'id': 'minutes', text: 'Minutes' },
    { 'id': 'hours', text: 'Hours' },
    { 'id': 'days', text: 'Days' },
    { 'id': 'weeks', text: 'Weeks' },
    { 'id': 'months', text: 'Months' }
];
WidgetChartAttributes.chartGroupBy = [
    { 'id': 'none', text: 'None' },
    { 'id': 'month', text: 'Hour' },
    { 'id': 'day', text: 'Day' },
    { 'id': 'week', text: 'Week' },
    { 'id': 'month', text: 'Month' }
];
class WidgetGaugeDataSources {
}
exports.WidgetGaugeDataSources = WidgetGaugeDataSources;
WidgetGaugeDataSources.dataSources = [
    { 'id': 'adcSensor', text: 'ADC Sensor' },
    { 'id': 'ioSensor', text: 'IO Sensor' }
];
class WidgetGaugeTypes {
}
exports.WidgetGaugeTypes = WidgetGaugeTypes;
WidgetGaugeTypes.gaugeTypes = [
    { 'id': 'gauge', text: 'Gauge' },
    { 'id': 'linearGauge', text: 'Linear Gauge' }
];
class WidgetGaugeAttributes extends WidgetAttributes {
}
exports.WidgetGaugeAttributes = WidgetGaugeAttributes;
class WidgetDeviceActionAttributes extends WidgetAttributes {
}
exports.WidgetDeviceActionAttributes = WidgetDeviceActionAttributes;
class WidgetDeviceAttributesAttributes extends WidgetAttributes {
}
exports.WidgetDeviceAttributesAttributes = WidgetDeviceAttributesAttributes;
class WidgetDeviceErrorsAttributes extends WidgetAttributes {
}
exports.WidgetDeviceErrorsAttributes = WidgetDeviceErrorsAttributes;
class WidgetDevicePropertiesAttributes extends WidgetAttributes {
}
exports.WidgetDevicePropertiesAttributes = WidgetDevicePropertiesAttributes;
class WidgetDevicePhotoAttributes extends WidgetAttributes {
}
exports.WidgetDevicePhotoAttributes = WidgetDevicePhotoAttributes;
class WidgetDeviceReportsAttributes extends WidgetAttributes {
}
exports.WidgetDeviceReportsAttributes = WidgetDeviceReportsAttributes;
class WidgetDateRangePickerAttributes extends WidgetAttributes {
}
exports.WidgetDateRangePickerAttributes = WidgetDateRangePickerAttributes;
class WidgetDeviceDataAttributes extends WidgetAttributes {
}
exports.WidgetDeviceDataAttributes = WidgetDeviceDataAttributes;
class WidgetDeviceLogsAttributes extends WidgetAttributes {
}
exports.WidgetDeviceLogsAttributes = WidgetDeviceLogsAttributes;
class WidgetDeviceConnectionLogAttributes extends WidgetAttributes {
}
exports.WidgetDeviceConnectionLogAttributes = WidgetDeviceConnectionLogAttributes;
class WidgetDeviceNotesAttributes extends WidgetAttributes {
}
exports.WidgetDeviceNotesAttributes = WidgetDeviceNotesAttributes;
class WidgetFSLiteTicketAttributes extends WidgetAttributes {
}
exports.WidgetFSLiteTicketAttributes = WidgetFSLiteTicketAttributes;
class WidgetDeviceBomAttributes extends WidgetAttributes {
}
exports.WidgetDeviceBomAttributes = WidgetDeviceBomAttributes;
class WidgetDeviceResourcesAttributes extends WidgetAttributes {
}
exports.WidgetDeviceResourcesAttributes = WidgetDeviceResourcesAttributes;
class WidgetDeviceTicketAttributes extends WidgetAttributes {
}
exports.WidgetDeviceTicketAttributes = WidgetDeviceTicketAttributes;
class WidgetPropertiesAttributes extends WidgetAttributes {
}
exports.WidgetPropertiesAttributes = WidgetPropertiesAttributes;
class WidgetAttributesAttributes extends WidgetAttributes {
}
exports.WidgetAttributesAttributes = WidgetAttributesAttributes;
class WidgetGeoAttributes extends WidgetAttributes {
}
exports.WidgetGeoAttributes = WidgetGeoAttributes;
