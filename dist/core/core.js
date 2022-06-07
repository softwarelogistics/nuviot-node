/// <reference path="../media/media-models.ts" />
var Core;
(function (Core) {
    var FieldType;
    (function (FieldType) {
        FieldType.String = 'string';
        FieldType.Integer = 'integer';
        FieldType.Decimal = 'decimal';
        FieldType.TrueFalse = 'true-false';
        FieldType.GeoLocation = 'geoLocation';
        FieldType.DateTime = 'dateTime';
        FieldType.State = 'state';
        FieldType.ValueWithUnit = 'valueWithUnit';
    })(FieldType = Core.FieldType || (Core.FieldType = {}));
})(Core || (Core = {}));
(function (Core) {
    var ResponseMessage = /** @class */ (function () {
        function ResponseMessage() {
        }
        return ResponseMessage;
    }());
    Core.ResponseMessage = ResponseMessage;
    var EntityHeader = /** @class */ (function () {
        function EntityHeader() {
        }
        return EntityHeader;
    }());
    Core.EntityHeader = EntityHeader;
    var SortedEntityHeader = /** @class */ (function () {
        function SortedEntityHeader() {
        }
        return SortedEntityHeader;
    }());
    Core.SortedEntityHeader = SortedEntityHeader;
    var Address = /** @class */ (function () {
        function Address() {
        }
        return Address;
    }());
    Core.Address = Address;
    var EntityHeaderEx = /** @class */ (function () {
        function EntityHeaderEx() {
        }
        return EntityHeaderEx;
    }());
    Core.EntityHeaderEx = EntityHeaderEx;
    var EntityHeaderEnum = /** @class */ (function () {
        function EntityHeaderEnum() {
        }
        return EntityHeaderEnum;
    }());
    Core.EntityHeaderEnum = EntityHeaderEnum;
    var InvokeResult = /** @class */ (function () {
        function InvokeResult() {
        }
        return InvokeResult;
    }());
    Core.InvokeResult = InvokeResult;
    var InvokeResultEx = /** @class */ (function () {
        function InvokeResultEx() {
        }
        return InvokeResultEx;
    }());
    Core.InvokeResultEx = InvokeResultEx;
    var SimpleNote = /** @class */ (function () {
        function SimpleNote() {
        }
        return SimpleNote;
    }());
    Core.SimpleNote = SimpleNote;
})(Core || (Core = {}));
