export interface IWigetEditor {
    save(): Core.InvokeResult;
}
export declare class WidgetCatalogService {
    constructor();
    catalog: UI.WidgetTemplate[];
    getWidget(widgetId: string): UI.WidgetTemplate;
    getComponent(widgetId: string): any;
    getComponentEditor(widgetId: string): any;
    getWidgetCatalog(): UI.WidgetTemplate[];
}
