"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCatalogService = void 0;
const core_1 = require("@angular/core");
const linqts_1 = require("linqts");
const device_chart_widget_component_1 = require("../ui/widgets/device-chart-widget/device-chart-widget.component");
const device_gauge_widget_component_1 = require("../ui/widgets/device-gauge-widget/device-gauge-widget.component");
const devices_widget_component_1 = require("../ui/widgets/devices-widget/devices-widget.component");
const device_repo_widget_component_1 = require("../ui/widgets/device-repo-widget/device-repo-widget.component");
const device_explorer_widget_component_1 = require("../ui/widgets/device-explorer-widget/device-explorer-widget.component");
const device_view_widget_component_1 = require("../ui/widgets/device-view-widget/device-view-widget.component");
const device_geo_widget_component_1 = require("../ui/widgets/device-geo-widget/device-geo-widget.component");
const device_data_widget_component_1 = require("../ui/widgets/device-data-widget/device-data-widget.component");
const device_action_widget_component_1 = require("../ui/widgets/device-action-widget/device-action-widget.component");
const device_report_widget_component_1 = require("../ui/widgets/device-report-widget/device-report-widget.component");
const date_range_picker_widget_component_1 = require("../ui/widgets/date-range-picker-widget/date-range-picker-widget.component");
const device_notes_widget_component_1 = require("../ui/widgets/device-notes-widget/device-notes-widget.component");
const device_ticket_add_widget_component_1 = require("../ui/widgets/device-ticket-add-widget/device-ticket-add-widget.component");
const device_note_add_widget_component_1 = require("../ui/widgets/device-note-add-widget/device-note-add-widget.component");
const device_tickets_widget_component_1 = require("../ui/widgets/device-tickets-widget/device-tickets-widget.component");
const device_bom_widget_component_1 = require("../ui/widgets/device-bom-widget/device-bom-widget.component");
const device_resources_widget_component_1 = require("../ui/widgets/device-resources-widget/device-resources-widget.component");
const device_connection_log_widget_component_1 = require("../ui/widgets/device-connection-log-widget/device-connection-log-widget.component");
const devices_widget_editor_component_1 = require("../uibuilder/widget-editors/devices-widget-editor/devices-widget-editor.component");
const device_action_widget_editor_component_1 = require("../uibuilder/widget-editors/device-action-widget-editor/device-action-widget-editor.component");
const device_chart_widget_editor_component_1 = require("../uibuilder/widget-editors/device-chart-widget-editor/device-chart-widget-editor.component");
const device_gauge_widget_editor_component_1 = require("../uibuilder/widget-editors/device-gauge-widget-editor/device-gauge-widget-editor.component");
const device_data_widget_editor_component_1 = require("../uibuilder/widget-editors/device-data-widget-editor/device-data-widget-editor.component");
const device_explorer_widget_editor_component_1 = require("../uibuilder/widget-editors/device-explorer-widget-editor/device-explorer-widget-editor.component");
const device_geo_widget_editor_component_1 = require("../uibuilder/widget-editors/device-geo-widget-editor/device-geo-widget-editor.component");
const device_repo_widget_editor_component_1 = require("../uibuilder/widget-editors/device-repo-widget-editor/device-repo-widget-editor.component");
const device_view_widget_editor_component_1 = require("../uibuilder/widget-editors/device-view-widget-editor/device-view-widget-editor.component");
const device_photos_widget_component_1 = require("../ui/widgets/device-photos-widget/device-photos-widget.component");
const device_notes_widget_editor_component_1 = require("../uibuilder/widget-editors/device-notes-widget-editor/device-notes-widget-editor.component");
const device_properties_widget_editor_component_1 = require("../uibuilder/widget-editors/device-properties-widget-editor/device-properties-widget-editor.component");
const device_properties_widget_component_1 = require("../ui/widgets/device-properties-widget/device-properties-widget.component");
const device_attributes_widget_editor_component_1 = require("../uibuilder/widget-editors/device-attributes-widget-editor/device-attributes-widget-editor.component");
const device_report_widget_editor_component_1 = require("../uibuilder/widget-editors/device-report-widget-editor/device-report-widget-editor.component");
const device_photos_widget_editor_component_1 = require("../uibuilder/widget-editors/device-photos-widget-editor/device-photos-widget-editor.component");
const device_attributes_widget_component_1 = require("../ui/widgets/device-attributes-widget/device-attributes-widget.component");
const date_range_picker_wdiget_editor_component_1 = require("../uibuilder/widget-editors/date-range-picker-wdiget-editor/date-range-picker-wdiget-editor.component");
const device_logs_widget_component_1 = require("../ui/widgets/device-logs-widget/device-logs-widget.component");
const device_logs_widget_editor_component_1 = require("../uibuilder/widget-editors/device-logs-widget-editor/device-logs-widget-editor.component");
const device_resources_widget_editor_component_1 = require("../uibuilder/widget-editors/device-resources-widget-editor/device-resources-widget-editor.component");
const device_bom_widget_editor_component_1 = require("../uibuilder/widget-editors/device-bom-widget-editor/device-bom-widget-editor.component");
const device_ticket_add_widget_editor_component_1 = require("../uibuilder/widget-editors/device-ticket-add-widget-editor/device-ticket-add-widget-editor.component");
const device_tickets_widget_editor_component_1 = require("../uibuilder/widget-editors/device-tickets-widget-editor/device-tickets-widget-editor.component");
const device_note_add_widget_editor_component_1 = require("../uibuilder/widget-editors/device-note-add-widget-editor/device-note-add-widget-editor.component");
const device_errors_widget_component_1 = require("../ui/widgets/device-errors-widget/device-errors-widget.component");
const device_errors_widget_editor_component_1 = require("../uibuilder/widget-editors/device-errors-widget-editor/device-errors-widget-editor.component");
// tslint:disable-next-line:max-line-length
const device_connection_log_widget_editor_component_1 = require("../uibuilder/widget-editors/device-connection-log-widget-editor/device-connection-log-widget-editor.component");
let WidgetCatalogService = class WidgetCatalogService {
    constructor() {
        this.catalog = [
            {
                widgetId: '87520E2701E944C28312104393D83C92',
                name: 'Device View',
                key: 'deviceview',
                title: 'Device Details',
                icon: 'fa fa-microchip',
                shortDescription: 'details, actions, attributes and properties for a device',
                description: 'Displays a list of common fields and actions for a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '680BB10E841B4AAD80BBE3D002940EA9',
                name: 'Devices',
                key: 'devices',
                title: 'Devices',
                icon: 'fa fa-list-alt',
                shortDescription: 'list of preselected devices',
                description: 'Shows a list of preselected devices',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '26C49405139446469156503336819C3A',
                name: 'Device Chart',
                key: 'devicechart',
                title: 'Device Chart',
                icon: 'fa fa-chart-line',
                description: 'Displays a chart for a device',
                shortDescription: 'customizable chart for a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '7B2D74A338F04E6886A450333DAC0526',
                name: 'Device Gauge',
                key: 'devicegauge',
                title: 'Device Gauge',
                icon: 'fa fa-chart-line',
                description: 'Displays a gauge for a device',
                shortDescription: 'customizable gauge for a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: 'E65FC019D52149ECAAB10F9771A02D0C',
                name: 'Device Repos',
                key: 'devicerepos',
                title: 'Device Repos',
                shortDescription: 'list of device repositories',
                icon: 'fa fa-microchip',
                description: 'Display a list of device repositories',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '3F5E7F41A9B0412A943566926A61B90D',
                name: 'Device Explorer',
                key: 'deviceexplorer',
                title: 'Device Explorer',
                icon: 'fa fa-microchip',
                shortDescription: 'searchable list of devices for a device repository',
                description: 'Display a searchable list of devices',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '4ED078DC6BA5477BBE8D3766D20F96DA',
                name: 'Device Map View',
                key: 'devicegeo',
                title: 'Device Map View',
                icon: 'fa fa-globe',
                shortDescription: 'current location and location history for a device or devices',
                description: 'Displays a device on a map',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '864F0658FC2848289759C5BEF494A9F9',
                name: 'Device Data',
                key: 'devicedata',
                icon: 'fa fa-table',
                shortDescription: 'historical device data',
                title: 'Device Data',
                description: 'Displays a chart for a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: 'A64F2658FC2848286759C3BEF594A912',
                name: 'Device Reports',
                key: 'devicereports',
                icon: 'fa fa-file-pdf',
                shortDescription: 'Device Reports',
                title: 'Device Reports',
                description: 'list of reports that have been generated for this device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '163DE081FCD84207871969E094BD18DC',
                name: 'Device Connection Log',
                key: 'deviceconnectionlog',
                icon: 'fa fa-table',
                shortDescription: 'device connection history',
                title: 'Device Connection Log',
                description: 'shows the history of the device connecting to the server along with firmware version and signal strength.',
                isBeta: false,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            /*{
              widgetId: 'EF11E38ABABC4D39A5EA795B3EDB9189',
              name: 'Device Logs',
              key: 'devicelogs',
              icon: 'fa fa-file-text-o',
              shortDescription: 'messages that has been logged to a device',
              title: 'Device Logs',
              description: 'messages that has been logged to a device',
              isBeta: true,
              fields: [],
              defaultWidgetAttributes: { populationStrategy: { id: '-1', text: 'not specified' } }
            },*/
            {
                widgetId: 'B7CFA5F0AE6740F6B46B150EF85E3B72',
                name: 'Add a Device Note',
                key: 'adddevicenote',
                icon: 'fa fa-clipboard',
                shortDescription: 'add a note to a device',
                title: 'Add Device Note',
                description: 'add a note to a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '1FC194859477471DBCADFC38ACE60FC5',
                name: 'Device Notes',
                key: 'devicenotes',
                icon: 'fa fa-clipboard',
                shortDescription: 'notes that has been logged to a device',
                title: 'Device Notes',
                description: 'notes that has been logged to a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '8AAEBC42332140C1B5CA353E2F7E75AE',
                name: 'Device Attributes',
                key: 'deviceattributes',
                icon: 'fa fa-code',
                shortDescription: 'attributes for the current state of your device',
                title: 'Device Attributes',
                description: 'Adds a widget that will display the attributes or current state of your device.',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '3380A6D80FE642F5AB280EA2858AD582',
                name: 'Device Actions',
                key: 'deviceactions',
                icon: 'fa fa-cloud-download',
                shortDescription: 'actions that can be taken for a device',
                title: 'Device Actions',
                description: 'Adds a widget that will allow for sending a command to a widget',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '6F4A7DC4B7BF49C79D759613BD46FD94',
                name: 'Device Properties',
                key: 'deviceproperties',
                icon: 'fa fa-tasks',
                shortDescription: 'properties to configure your device',
                title: 'Device Properties',
                description: 'Adds a widget to let you configure properties of your device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: 'EFF619A1F72D4ACABFEE1FB91856B12F',
                name: 'Device Errors',
                key: 'deviceerrors',
                icon: 'fa fa-exclamation-triangle',
                shortDescription: 'errors that have been generated from your devices',
                title: 'Device Errors',
                description: 'Adds a widget to let you view errors generated by your devices',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: 'F3381E3396F444A1B034E26952C7E2E0',
                name: 'Device Bill of Material',
                key: 'devicebom',
                icon: 'fa fa-wrench',
                shortDescription: 'list of bill of material items for the device type',
                title: 'BOM',
                description: 'Bill of Material Items associated with the Device Type',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '7A465E0D653343C6AB3E3CA384EF8A6B',
                name: 'Device Resources',
                key: 'deviceresources',
                icon: 'fa fa-book',
                shortDescription: 'images, videos and documents for the device type',
                title: 'Device Resources',
                description: 'Images, videos and documents assocaited with Device Type',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '4D731147D0D74E1785E6BFE5EFDD54D8',
                name: 'Device Media',
                key: 'devicephotos',
                icon: 'fa fa-images',
                shortDescription: 'list of images and other files attached to a device',
                title: 'Device Photos',
                description: 'Adds a widget that will show a list of photos associated with a device',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: 'AFAC9047D0D7445785E32FE5EFDD5419',
                name: 'Date Range Picker',
                key: 'dateranger',
                icon: 'fa fa-calendar',
                shortDescription: 'view level date range picker',
                title: 'Date Range',
                description: 'allows user to select start/end date for widgets on page',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '0A2BF6EDB0B24F9B862FFDFB01663E6B',
                name: 'Field Service Lite Tickets',
                key: 'fslitetickets',
                icon: 'fa fa-ticket',
                shortDescription: 'view service tickets for a device or service board',
                title: 'View FS Lite Tickets',
                description: 'view service tickets for a device or service board',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
            {
                widgetId: '90CD6FCC2CDD4E88A9E35302C5213DA7',
                name: 'Add Service Tickets',
                key: 'addfsliteticket',
                icon: 'fa fa-ticket',
                shortDescription: 'add a new field service lite ticket',
                title: 'Add FSLite Ticket',
                description: 'add a new field service lite ticket',
                isBeta: true,
                fields: [],
                getDefaultWidgetAttributes() { return { populationStrategy: { id: '-1', text: 'not specified' } }; }
            },
        ];
    }
    getWidget(widgetId) {
        const widgets = new linqts_1.List(this.catalog);
        return widgets.Where(wig => wig.widgetId === widgetId).FirstOrDefault();
    }
    getComponent(widgetId) {
        const widgets = new linqts_1.List(this.catalog);
        const widget = this.getWidget(widgetId);
        if (!widget) {
            throw new Error(`could not find widget with id ${widgetId} `);
        }
        switch (widget.key) {
            case 'devices': return devices_widget_component_1.DevicesWidgetComponent;
            case 'devicerepos': return device_repo_widget_component_1.DeviceRepoWidgetComponent;
            case 'devicechart': return device_chart_widget_component_1.DeviceChartWidgetComponent;
            case 'devicegauge': return device_gauge_widget_component_1.DeviceGaugeWidgetComponent;
            case 'deviceexplorer': return device_explorer_widget_component_1.DeviceExplorerWidgetComponent;
            case 'deviceview': return device_view_widget_component_1.DeviceViewWidgetComponent;
            case 'devicegeo': return device_geo_widget_component_1.DeviceGeoWidgetComponent;
            case 'devicedata': return device_data_widget_component_1.DeviceDataWidgetComponent;
            case 'deviceactions': return device_action_widget_component_1.DeviceActionWidgetComponent;
            case 'deviceattributes': return device_attributes_widget_component_1.DeviceAttributesWidgetComponent;
            case 'deviceproperties': return device_properties_widget_component_1.DevicePropertiesWidgetComponent;
            case 'devicephotos': return device_photos_widget_component_1.DevicePhotosWidgetComponent;
            case 'devicelogs': return device_logs_widget_component_1.DeviceLogsWidgetComponent;
            case 'devicenotes': return device_notes_widget_component_1.DeviceNotesWidgetComponent;
            case 'deviceresources': return device_resources_widget_component_1.DeviceResourcesWidgetComponent;
            case 'adddevicenote': return device_note_add_widget_component_1.DeviceNoteAddWidgetComponent;
            case 'fslitetickets': return device_tickets_widget_component_1.DeviceTicketsWidgetComponent;
            case 'addfsliteticket': return device_ticket_add_widget_component_1.DeviceTicketAddWidgetComponent;
            case 'devicebom': return device_bom_widget_component_1.DeviceBomWidgetComponent;
            case 'dateranger': return date_range_picker_widget_component_1.DateRangePickerWidgetComponent;
            case 'deviceerrors': return device_errors_widget_component_1.DeviceErrorsWidgetComponent;
            case 'deviceconnectionlog': return device_connection_log_widget_component_1.DeviceConnectionLogWidgetComponent;
            case 'devicereports': return device_report_widget_component_1.DeviceReportWidgetComponent;
        }
    }
    getComponentEditor(widgetId) {
        const widgets = new linqts_1.List(this.catalog);
        const widget = this.getWidget(widgetId);
        if (!widget) {
            throw new Error(`could not find widget with id ${widgetId} `);
        }
        switch (widget.key) {
            case 'devices': return devices_widget_editor_component_1.DevicesWidgetEditorComponent;
            case 'devicerepos': return device_repo_widget_editor_component_1.DeviceRepoWidgetEditorComponent;
            case 'devicechart': return device_chart_widget_editor_component_1.DeviceChartWidgetEditorComponent;
            case 'devicegauge': return device_gauge_widget_editor_component_1.DeviceGaugeWidgetEditorComponent;
            case 'deviceexplorer': return device_explorer_widget_editor_component_1.DeviceExplorerWidgetEditorComponent;
            case 'deviceview': return device_view_widget_editor_component_1.DeviceViewWidgetEditorComponent;
            case 'devicegeo': return device_geo_widget_editor_component_1.DeviceGeoWidgetEditorComponent;
            case 'devicedata': return device_data_widget_editor_component_1.DeviceDataWidgetEditorComponent;
            case 'deviceattributes': return device_attributes_widget_editor_component_1.DeviceAttributesWidgetEditorComponent;
            case 'deviceproperties': return device_properties_widget_editor_component_1.DevicePropertiesWidgetEditorComponent;
            case 'deviceactions': return device_action_widget_editor_component_1.DeviceActionWidgetEditorComponent;
            case 'devicelogs': return device_logs_widget_editor_component_1.DeviceLogsWidgetEditorComponent;
            case 'devicenotes': return device_notes_widget_editor_component_1.DeviceNotesWidgetEditorComponent;
            case 'devicephotos': return device_photos_widget_editor_component_1.DevicePhotosWidgetEditorComponent;
            case 'devicebom': return device_bom_widget_editor_component_1.DeviceBomWidgetEditorComponent;
            case 'deviceresources': return device_resources_widget_editor_component_1.DeviceResourcesWidgetEditorComponent;
            case 'adddevicenote': return device_note_add_widget_editor_component_1.DeviceNoteAddWidgetEditorComponent;
            case 'fslitetickets': return device_tickets_widget_editor_component_1.DeviceTicketsWidgetEditorComponent;
            case 'addfsliteticket': return device_ticket_add_widget_editor_component_1.DeviceTicketAddWidgetEditorComponent;
            case 'dateranger': return date_range_picker_wdiget_editor_component_1.DateRangePickerWdigetEditorComponent;
            case 'deviceerrors': return device_errors_widget_editor_component_1.DeviceErrorsWidgetEditorComponent;
            case 'deviceconnectionlog': return device_connection_log_widget_editor_component_1.DeviceConnectionLogWidgetEditorComponent;
            case 'devicereports': return device_report_widget_editor_component_1.DeviceReportWidgetEditorComponent;
        }
    }
    getWidgetCatalog() {
        return this.catalog;
    }
};
WidgetCatalogService = __decorate([
    (0, core_1.Injectable)()
], WidgetCatalogService);
exports.WidgetCatalogService = WidgetCatalogService;
