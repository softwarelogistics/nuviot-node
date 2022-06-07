var Planner;
(function (Planner) {
    Planner.QuestionType_MultipleChoice = 'multiplechoice';
    Planner.QuestionType_TrueFalse = 'truefalse';
    Planner.QuestionType_SelectMany = 'selectmany';
    Planner.QuestionType_Integer = 'integer';
    Planner.QuestionType_Decimal = 'decimal';
    Planner.QuestionType_FreeFormText = 'freeformtext';
    var ActionTypes;
    (function (ActionTypes) {
        ActionTypes[ActionTypes["Create"] = 0] = "Create";
        ActionTypes[ActionTypes["Update"] = 1] = "Update";
        ActionTypes[ActionTypes["Delete"] = 2] = "Delete";
    })(ActionTypes = Planner.ActionTypes || (Planner.ActionTypes = {}));
})(Planner || (Planner = {}));
