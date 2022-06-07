/// <reference path="../media/media-models.d.ts" />
declare namespace Core.FieldType {
    const String = "string";
    const Integer = "integer";
    const Decimal = "decimal";
    const TrueFalse = "true-false";
    const GeoLocation = "geoLocation";
    const DateTime = "dateTime";
    const State = "state";
    const ValueWithUnit = "valueWithUnit";
}
declare namespace Core {
    interface IKeyedModel {
        key: string;
    }
    interface IKeyNamedModel {
        key: string;
        name: string;
    }
    interface Label {
        id: string;
        text: string;
        description: string;
        foregroundColor: string;
        backgroundColor: string;
    }
    interface LabelSet {
        id: string;
        creationDate: string;
        lastUpdateDate: string;
        createdBy: EntityHeader;
        lastUpdatedBy: EntityHeader;
        isPublic: boolean;
        ownerOrganization: EntityHeader;
        ownerUser: EntityHeader;
        labels: Label[];
    }
    interface LabeledEntity {
        id: string;
        entityType: string;
        name: string;
        description: string;
        labels: Label[];
    }
    interface FormField {
        label: string;
        isUserEditable: boolean;
        isVisible: boolean;
        isEnabled: boolean;
        name: string;
        isRequired: boolean;
        fieldType: string;
        host?: any;
        watermark?: any;
        requiredMessage?: any;
        help?: string;
        regEx?: string;
        regExMessage?: any;
        value?: any;
        display?: any;
        defaultValue?: any;
        dataType?: any;
        minLength?: any;
        maxLength?: any;
        command?: any;
        options?: PickerOption[];
        uploadUrl?: string;
        fileUploaded(resource: Media.MediaResource, fileName: string): void;
        propertyChanged(field: FormField): void;
        selectEntityHeader(field: FormField): void;
        clearEntityHeader(field: FormField): void;
    }
    interface PickerOption {
        help?: string;
        id: string;
        key: string;
        label: string;
        name?: string;
        text: string;
    }
    interface ListFilter {
        start?: string;
        end?: string;
        groupBy?: string;
        groupBySize?: number;
        pageSize?: number;
        pageIndex?: number;
        nextRowKey?: string;
        nextPartitionKey?: string;
    }
    interface Location {
        latitude: number;
        longitude: number;
    }
    interface DateRange {
        start?: Date;
        end?: Date;
        hasValue: boolean;
    }
    interface SectionGrouping<TModel> {
        name: string;
        description: string;
        items: TModel[];
    }
    interface Unit extends IKeyNamedModel {
        displayFormat: string;
        numberDecimalPoints: string;
        description: string;
        abbreviation: string;
        key: string;
        name: string;
        isDefault: string;
    }
    interface State extends IKeyNamedModel {
        name: string;
        key: string;
        isInitialState: boolean;
        isAlarmState: boolean;
        description: string;
    }
    interface UnitSet extends IKeyNamedModel {
        id: string;
        key: string;
        name: string;
        units: Unit[];
    }
    interface StateSet extends IKeyNamedModel {
        id: string;
        key: string;
        name: string;
        states: State[];
    }
    interface AttributeValue extends IKeyNamedModel {
        name: string;
        key: string;
        value?: string;
        attributeType: EntityHeader;
        stateSet?: EntityHeaderEx<StateSet>;
        unitSet?: EntityHeaderEx<UnitSet>;
        isAlarm: boolean;
    }
    interface GeoLocation {
        latitude: number;
        longitude: number;
        altitude: number;
    }
    interface Image {
        id: string;
        imageUrl: string;
        width: number;
        height: number;
    }
    class ResponseMessage {
        message: string;
    }
    class EntityHeader {
        id: string;
        key?: string;
        text: string;
    }
    class SortedEntityHeader {
        id: string;
        text: string;
        sortIndex: number;
    }
    class Address {
        addressType: EntityHeader;
        geoLocation: Core.GeoLocation;
        address1: string;
        address2: string;
        unitNumber: string;
        city: string;
        stateOrProvince: string;
        postalCode: string;
        county: string;
        notes: string;
    }
    class EntityHeaderEx<TModel> {
        id: string;
        key: string;
        text: string;
        value?: TModel;
    }
    class EntityHeaderEnum<TModel> {
        id: TModel;
        key: string;
        text: string;
    }
    interface ListResponseColumn {
        header: string;
        fieldName: string;
        alignment: string;
        sortable: boolean;
        visible: boolean;
        formatString: string;
        help?: any;
    }
    interface ListResponse<TModel> {
        title?: string;
        help?: any;
        columns?: ListResponseColumn[];
        model: TModel[];
        pageSize?: number;
        pageIndex?: number;
        pageCount?: number;
        nextPartitionKey?: any;
        nextRowKey?: any;
        hasMoreRecords?: boolean;
        resultId?: string;
        successful: boolean;
        warnings?: any[];
        errors?: any[];
    }
    interface Notification {
        payloadType: string;
        payload: any;
    }
    interface ErrorMessage {
        details?: string;
        errorCode?: string;
        message: string;
        systemError?: boolean;
    }
    class InvokeResult {
        resultId?: string;
        successful: boolean;
        errors: ErrorMessage[];
        warnings: ErrorMessage[];
    }
    class InvokeResultEx<TData> {
        resultId?: string;
        successful: boolean;
        errors: ErrorMessage[];
        warnings: ErrorMessage[];
        result: TData;
    }
    class SimpleNote {
        note: string;
    }
    interface FormResult<TModel, TView> {
        resultId: string;
        successful: boolean;
        model: TModel;
        title: string;
        help: string;
        formFields: string[];
        view: TView;
        errors: ErrorMessage[];
        warnings: ErrorMessage[];
    }
    interface IView {
        key: FormField;
    }
    interface IModel {
        id: string;
        key: string;
        name: string;
    }
}
