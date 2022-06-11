declare namespace UI {
    interface Field {
        order: number;
        name: string;
        label: string;
        fieldAttributes: any[];
    }
    interface WidgetTemplate {
        widgetId: string;
        name: string;
        isBeta: boolean;
        key: string;
        icon: string;
        title: string;
        description: string;
        shortDescription: string;
        fields: Field[];
        getDefaultWidgetAttributes(): string;
    }
    interface ViewWidget {
        widgetId: string;
        id: string;
        name: string;
        title: string;
        widget?: WidgetTemplate;
        order: number;
        widgetAttributes: any;
    }
    interface View {
        key: string;
        help?: string;
        name: string;
        icon: string;
        title: string;
        isBeta: boolean;
        foregroundColor: string;
        backgroundColor: string;
        widgets: ViewWidget[];
    }
    interface IoTApp {
        id: string;
        isReadOnly: boolean;
        isBeta: boolean;
        key: string;
        name: string;
        title: string;
        foregroundColor: string;
        backgroundColor: string;
        help: string;
        icon: string;
        dashboards: Dashboard[];
    }
    interface Dashboard {
        id: string;
        isBeta: boolean;
        key: string;
        icon: string;
        ioTApp: Core.EntityHeader;
        name: string;
        title: string;
        help: string;
        views: View[];
    }
    interface BreadCrumb {
        title: string;
        icon: string;
        route: string[];
    }
    interface Module {
        title: string;
        description: string;
        icon: string;
        isNgx: boolean;
        isExternal: boolean;
        uri: string;
    }
    interface Kiosk {
        id: string;
        key: string;
        name: string;
        title: string;
        help: string;
        isPublic: boolean;
        viewDefinitions: KioskViewDefinition[];
        views: KioskView[];
    }
    interface KioskView extends View {
        dashboardName: string;
        displayDuration: number;
        sortOrder: number;
    }
    interface KioskViewDefinition {
        dashboardKey: string;
        dashboardName: string;
        viewKey: string;
        viewName: string;
        sortOrder: number;
        displayDuration: number;
    }
    class EnumDescription {
        name: string;
        key: string;
        label: string;
        help: string;
    }
}
