"use strict";
/// <reference path="./core/core.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.SevenSegementParseResult = exports.DisplayImageSegment = exports.DeviceMessageDefinitionField = exports.DeviceMessageDefinitionSummary = exports.DeviceMessageDefinition = exports.fldSearchLocationBody = exports.fldParameterTypes = exports.fldParsedFieldType = exports.fldFieldTypeContent = exports.msgDirectionIn = exports.msgContentTypeSevenSegement = exports.msgContentTypeMedia = exports.DeviceMessageDefinitionView = void 0;
var DeviceMessageDefinitionView = /** @class */ (function () {
    function DeviceMessageDefinitionView() {
    }
    return DeviceMessageDefinitionView;
}());
exports.DeviceMessageDefinitionView = DeviceMessageDefinitionView;
exports.msgContentTypeMedia = { value: 'Media', id: 'media', text: 'File/Upload Media' };
exports.msgContentTypeSevenSegement = { value: 'SevenSegementImage', id: 'sevensegementimage', text: 'Seven Segement Image' };
exports.msgDirectionIn = { value: 'Incoming', key: 'incoming', id: 'incoming', text: 'Incoming' };
exports.fldFieldTypeContent = { value: 'Content', key: 'content', id: 'content', text: 'Content' };
exports.fldParsedFieldType = [{ value: 'WholeNumber', key: 'wholenumber', id: 'wholenumber', text: 'Whole Number - 0.0' },
    { value: 'ReadlNumber', key: 'realnumber', id: 'realnumber', text: 'Read Number - 0.0' }];
exports.fldParameterTypes = [{ value: 'Integer', key: 'integer', id: 'integer', text: 'Integer' },
    { value: 'Decimal', key: 'body', id: 'decimal', text: 'Decimal' }];
exports.fldSearchLocationBody = { value: 'Body', key: 'body', id: 'body', text: 'Message Body' };
var DeviceMessageDefinition = /** @class */ (function () {
    function DeviceMessageDefinition() {
    }
    return DeviceMessageDefinition;
}());
exports.DeviceMessageDefinition = DeviceMessageDefinition;
var DeviceMessageDefinitionSummary = /** @class */ (function () {
    function DeviceMessageDefinitionSummary() {
    }
    return DeviceMessageDefinitionSummary;
}());
exports.DeviceMessageDefinitionSummary = DeviceMessageDefinitionSummary;
var DeviceMessageDefinitionField = /** @class */ (function () {
    function DeviceMessageDefinitionField() {
    }
    return DeviceMessageDefinitionField;
}());
exports.DeviceMessageDefinitionField = DeviceMessageDefinitionField;
var DisplayImageSegment = /** @class */ (function () {
    function DisplayImageSegment() {
    }
    return DisplayImageSegment;
}());
exports.DisplayImageSegment = DisplayImageSegment;
var SevenSegementParseResult = /** @class */ (function () {
    function SevenSegementParseResult() {
    }
    return SevenSegementParseResult;
}());
exports.SevenSegementParseResult = SevenSegementParseResult;
