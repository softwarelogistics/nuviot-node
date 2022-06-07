/// <reference path="../media/media-models.ts" />

namespace Core.FieldType {
    export const String = 'string';
    export const Integer = 'integer';
    export const Decimal = 'decimal';
    export const TrueFalse = 'true-false';
    export const GeoLocation = 'geoLocation';
    export const DateTime = 'dateTime';
    export const State = 'state';
    export const ValueWithUnit = 'valueWithUnit';
}

namespace Core {
    export interface IKeyedModel {
        key: string;
    }

    export interface IKeyNamedModel {
        key: string;
        name: string;
    }

    export interface Label {
      id: string;
      text: string;
      description: string;
      foregroundColor: string;
      backgroundColor: string;
    }

    export interface LabelSet {
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

    export interface LabeledEntity {
      id: string;
      entityType: string;
      name: string;
      description: string;
      labels: Label[];
    }

    export interface FormField {
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

    export interface PickerOption {
        help?: string;
        id: string;
        key: string;
        label: string;
        name?: string;
        text: string;
    }

    export interface ListFilter {
        start?: string;
        end?: string;
        groupBy?: string;
        groupBySize?: number;
        pageSize?: number;
        pageIndex?: number;
        nextRowKey?: string;
        nextPartitionKey?: string;
    }

    export interface Location {
        latitude: number;
        longitude: number;
    }

    export interface DateRange {
        start?: Date;
        end?: Date;
        hasValue: boolean;
    }

    export interface SectionGrouping<TModel> {
        name: string;
        description: string;
        items: TModel[];
    }

    export interface Unit extends IKeyNamedModel {
        displayFormat: string;
        numberDecimalPoints: string;
        description: string;
        abbreviation: string;
        key: string;
        name: string;
        isDefault: string;
    }

    export interface State extends IKeyNamedModel {
        name: string;
        key: string;
        isInitialState: boolean;
        isAlarmState: boolean;
        description: string;
    }

    export interface UnitSet extends IKeyNamedModel {
        id: string;
        key: string;
        name: string;
        units: Unit[];
    }

    export interface StateSet extends IKeyNamedModel {
        id: string;
        key: string;
        name: string;
        states: State[];
    }

    export interface AttributeValue extends IKeyNamedModel {
        name: string;
        key: string;
        value?: string;
        attributeType: EntityHeader;
        stateSet?: EntityHeaderEx<StateSet>;
        unitSet?: EntityHeaderEx<UnitSet>;
        isAlarm: boolean;
    }

    export interface GeoLocation {
        latitude: number;
        longitude: number;
        altitude: number;
    }

    export interface Image {
        id: string;
        imageUrl: string;
        width: number;
        height: number;
    }

    export class ResponseMessage {
        message: string;
    }

    export class EntityHeader {
        id: string;
        key?: string;
        text: string;
    }

    export class SortedEntityHeader {
        id: string;
        text: string;
        sortIndex: number;
    }

    export class Address {
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

    export class EntityHeaderEx<TModel> {
        id: string;
        key: string;
        text: string;
        value?: TModel;
    }

    export class EntityHeaderEnum<TModel> {
        id: TModel;
        key: string;
        text: string;
    }

    export interface ListResponseColumn {
        header: string;
        fieldName: string;
        alignment: string;
        sortable: boolean;
        visible: boolean;
        formatString: string;
        help?: any;
    }

    export interface ListResponse<TModel> {
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

    export interface Notification {

        payloadType: string;
        payload: any;
    }

    export interface ErrorMessage {
        details?: string;
        errorCode?: string;
        message: string;
        systemError?: boolean;
    }

    export class InvokeResult {
        resultId?: string;
        successful: boolean;
        errors: ErrorMessage[];
        warnings: ErrorMessage[];
    }

    export class InvokeResultEx<TData> {
        resultId?: string;
        successful: boolean;
        errors: ErrorMessage[];
        warnings: ErrorMessage[];
        result: TData;
    }

    export class SimpleNote {
        note: string;
    }

    export interface FormResult<TModel, TView> {
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

    export interface IView {
        key: FormField;
    }

    export interface IModel {
        id: string;
        key: string;
        name: string;
    }
}
