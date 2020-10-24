"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateString = void 0;
/**
 *
 * @param {*} templateText
 *
 * A utility which helps you use template strings in constants
 * eg.) templateText = 'This is a sample ${0} to demonstrate ${1}';
 *
 * how to use?
 *
 * const finalText = getTemplateString(templateText)('text', 'templates');
 *
 * or
 *
 * const templateFunctionWithText = getTemplateString(templateText);
 * const anotherFinalTextSomePlaceElse = templateFunctionWithText('text', 'templates');
 *
 * or
 *
 * getTemplateString`string ${0} to ${1} change`('string1', 'string2')
 *
 * NOTE: The interpolation is 0 indexed.
 */
exports.getTemplateString = function (templateText) {
    return function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (strings && strings.length) {
            strings.forEach(function (string, i) {
                templateText = templateText.replace('${' + i + '}', string);
            });
        }
        return templateText;
    };
};
