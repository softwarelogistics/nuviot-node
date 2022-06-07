"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGeoAttributes = exports.WidgetAttributesAttributes = exports.WidgetPropertiesAttributes = exports.WidgetDeviceTicketAttributes = exports.WidgetDeviceResourcesAttributes = exports.WidgetDeviceBomAttributes = exports.WidgetFSLiteTicketAttributes = exports.WidgetDeviceNotesAttributes = exports.WidgetDeviceConnectionLogAttributes = exports.WidgetDeviceLogsAttributes = exports.WidgetDeviceDataAttributes = exports.WidgetDateRangePickerAttributes = exports.WidgetDeviceReportsAttributes = exports.WidgetDevicePhotoAttributes = exports.WidgetDevicePropertiesAttributes = exports.WidgetDeviceErrorsAttributes = exports.WidgetDeviceAttributesAttributes = exports.WidgetDeviceActionAttributes = exports.WidgetGaugeAttributes = exports.WidgetGaugeTypes = exports.WidgetGaugeDataSources = exports.WidgetChartAttributes = exports.WidgetChartTypes = exports.DataSteamField = exports.WidgetDeviceExplorerAttributes = exports.WidgetDeviceViewAttributes = exports.WidgetDevicesAttributes = exports.WidgetAttributes = void 0;
var WidgetAttributes = /** @class */ (function () {
    function WidgetAttributes() {
    }
    return WidgetAttributes;
}());
exports.WidgetAttributes = WidgetAttributes;
var WidgetDevicesAttributes = /** @class */ (function (_super) {
    __extends(WidgetDevicesAttributes, _super);
    function WidgetDevicesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDevicesAttributes;
}(WidgetAttributes));
exports.WidgetDevicesAttributes = WidgetDevicesAttributes;
var WidgetDeviceViewAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceViewAttributes, _super);
    function WidgetDeviceViewAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceViewAttributes;
}(WidgetAttributes));
exports.WidgetDeviceViewAttributes = WidgetDeviceViewAttributes;
var WidgetDeviceExplorerAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceExplorerAttributes, _super);
    function WidgetDeviceExplorerAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceExplorerAttributes;
}(WidgetAttributes));
exports.WidgetDeviceExplorerAttributes = WidgetDeviceExplorerAttributes;
var DataSteamField = /** @class */ (function () {
    function DataSteamField() {
    }
    return DataSteamField;
}());
exports.DataSteamField = DataSteamField;
var WidgetChartTypes = /** @class */ (function () {
    function WidgetChartTypes() {
    }
    WidgetChartTypes.chartTypes = [
        { 'id': 'line', text: 'Line Chart' },
        { 'id': 'bar', text: 'Bar Chart' },
        { 'id': 'pie', text: 'Pie Chart' }
    ];
    return WidgetChartTypes;
}());
exports.WidgetChartTypes = WidgetChartTypes;
var WidgetChartAttributes = /** @class */ (function (_super) {
    __extends(WidgetChartAttributes, _super);
    function WidgetChartAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    return WidgetChartAttributes;
}(WidgetAttributes));
exports.WidgetChartAttributes = WidgetChartAttributes;
var WidgetGaugeDataSources = /** @class */ (function () {
    function WidgetGaugeDataSources() {
    }
    WidgetGaugeDataSources.dataSources = [
        { 'id': 'adcSensor', text: 'ADC Sensor' },
        { 'id': 'ioSensor', text: 'IO Sensor' }
    ];
    return WidgetGaugeDataSources;
}());
exports.WidgetGaugeDataSources = WidgetGaugeDataSources;
var WidgetGaugeTypes = /** @class */ (function () {
    function WidgetGaugeTypes() {
    }
    WidgetGaugeTypes.gaugeTypes = [
        { 'id': 'gauge', text: 'Gauge' },
        { 'id': 'linearGauge', text: 'Linear Gauge' }
    ];
    return WidgetGaugeTypes;
}());
exports.WidgetGaugeTypes = WidgetGaugeTypes;
var WidgetGaugeAttributes = /** @class */ (function (_super) {
    __extends(WidgetGaugeAttributes, _super);
    function WidgetGaugeAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetGaugeAttributes;
}(WidgetAttributes));
exports.WidgetGaugeAttributes = WidgetGaugeAttributes;
var WidgetDeviceActionAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceActionAttributes, _super);
    function WidgetDeviceActionAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceActionAttributes;
}(WidgetAttributes));
exports.WidgetDeviceActionAttributes = WidgetDeviceActionAttributes;
var WidgetDeviceAttributesAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceAttributesAttributes, _super);
    function WidgetDeviceAttributesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceAttributesAttributes;
}(WidgetAttributes));
exports.WidgetDeviceAttributesAttributes = WidgetDeviceAttributesAttributes;
var WidgetDeviceErrorsAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceErrorsAttributes, _super);
    function WidgetDeviceErrorsAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceErrorsAttributes;
}(WidgetAttributes));
exports.WidgetDeviceErrorsAttributes = WidgetDeviceErrorsAttributes;
var WidgetDevicePropertiesAttributes = /** @class */ (function (_super) {
    __extends(WidgetDevicePropertiesAttributes, _super);
    function WidgetDevicePropertiesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDevicePropertiesAttributes;
}(WidgetAttributes));
exports.WidgetDevicePropertiesAttributes = WidgetDevicePropertiesAttributes;
var WidgetDevicePhotoAttributes = /** @class */ (function (_super) {
    __extends(WidgetDevicePhotoAttributes, _super);
    function WidgetDevicePhotoAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDevicePhotoAttributes;
}(WidgetAttributes));
exports.WidgetDevicePhotoAttributes = WidgetDevicePhotoAttributes;
var WidgetDeviceReportsAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceReportsAttributes, _super);
    function WidgetDeviceReportsAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceReportsAttributes;
}(WidgetAttributes));
exports.WidgetDeviceReportsAttributes = WidgetDeviceReportsAttributes;
var WidgetDateRangePickerAttributes = /** @class */ (function (_super) {
    __extends(WidgetDateRangePickerAttributes, _super);
    function WidgetDateRangePickerAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDateRangePickerAttributes;
}(WidgetAttributes));
exports.WidgetDateRangePickerAttributes = WidgetDateRangePickerAttributes;
var WidgetDeviceDataAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceDataAttributes, _super);
    function WidgetDeviceDataAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceDataAttributes;
}(WidgetAttributes));
exports.WidgetDeviceDataAttributes = WidgetDeviceDataAttributes;
var WidgetDeviceLogsAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceLogsAttributes, _super);
    function WidgetDeviceLogsAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceLogsAttributes;
}(WidgetAttributes));
exports.WidgetDeviceLogsAttributes = WidgetDeviceLogsAttributes;
var WidgetDeviceConnectionLogAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceConnectionLogAttributes, _super);
    function WidgetDeviceConnectionLogAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceConnectionLogAttributes;
}(WidgetAttributes));
exports.WidgetDeviceConnectionLogAttributes = WidgetDeviceConnectionLogAttributes;
var WidgetDeviceNotesAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceNotesAttributes, _super);
    function WidgetDeviceNotesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceNotesAttributes;
}(WidgetAttributes));
exports.WidgetDeviceNotesAttributes = WidgetDeviceNotesAttributes;
var WidgetFSLiteTicketAttributes = /** @class */ (function (_super) {
    __extends(WidgetFSLiteTicketAttributes, _super);
    function WidgetFSLiteTicketAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetFSLiteTicketAttributes;
}(WidgetAttributes));
exports.WidgetFSLiteTicketAttributes = WidgetFSLiteTicketAttributes;
var WidgetDeviceBomAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceBomAttributes, _super);
    function WidgetDeviceBomAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceBomAttributes;
}(WidgetAttributes));
exports.WidgetDeviceBomAttributes = WidgetDeviceBomAttributes;
var WidgetDeviceResourcesAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceResourcesAttributes, _super);
    function WidgetDeviceResourcesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceResourcesAttributes;
}(WidgetAttributes));
exports.WidgetDeviceResourcesAttributes = WidgetDeviceResourcesAttributes;
var WidgetDeviceTicketAttributes = /** @class */ (function (_super) {
    __extends(WidgetDeviceTicketAttributes, _super);
    function WidgetDeviceTicketAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetDeviceTicketAttributes;
}(WidgetAttributes));
exports.WidgetDeviceTicketAttributes = WidgetDeviceTicketAttributes;
var WidgetPropertiesAttributes = /** @class */ (function (_super) {
    __extends(WidgetPropertiesAttributes, _super);
    function WidgetPropertiesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetPropertiesAttributes;
}(WidgetAttributes));
exports.WidgetPropertiesAttributes = WidgetPropertiesAttributes;
var WidgetAttributesAttributes = /** @class */ (function (_super) {
    __extends(WidgetAttributesAttributes, _super);
    function WidgetAttributesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetAttributesAttributes;
}(WidgetAttributes));
exports.WidgetAttributesAttributes = WidgetAttributesAttributes;
var WidgetGeoAttributes = /** @class */ (function (_super) {
    __extends(WidgetGeoAttributes, _super);
    function WidgetGeoAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidgetGeoAttributes;
}(WidgetAttributes));
exports.WidgetGeoAttributes = WidgetGeoAttributes;
