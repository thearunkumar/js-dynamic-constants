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
export const getTemplateString = (templateText: string) => {
  return (...strings: string[]) => {
    if (strings && strings.length) {
      strings.forEach((string, i) => {
        templateText = templateText.replace('${' + i + '}', string);
      });
    }
    return templateText;
  };
};
