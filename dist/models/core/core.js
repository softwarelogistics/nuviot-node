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
    class ResponseMessage {
    }
    Core.ResponseMessage = ResponseMessage;
    class EntityHeader {
    }
    Core.EntityHeader = EntityHeader;
    class SortedEntityHeader {
    }
    Core.SortedEntityHeader = SortedEntityHeader;
    class Address {
    }
    Core.Address = Address;
    class EntityHeaderEx {
    }
    Core.EntityHeaderEx = EntityHeaderEx;
    class EntityHeaderEnum {
    }
    Core.EntityHeaderEnum = EntityHeaderEnum;
    class InvokeResult {
    }
    Core.InvokeResult = InvokeResult;
    class InvokeResultEx {
    }
    Core.InvokeResultEx = InvokeResultEx;
    class SimpleNote {
    }
    Core.SimpleNote = SimpleNote;
})(Core || (Core = {}));
