# js-dynamic-constants
Easy dynamic template strings / constants for production scale application

### Usage

1. To import, `import { getTemplateString } from 'js-dynamic-constants';`

### API

`getTemplateString(someString)(value1, value2, value3, ...);`

For example,

Consider the string **"This is a ${0} dynamic string, ${1} use `${n}` to indicate the corresponding fillers"**

Fill the required values in order in the inner function arguments.

```
const templateString = 'This is a ${0} dynamic string, you can pass ${1} number of ${2}';
const dynamicString = getTemplateString(templateString)('sample', 'any', 'arguments');
// This is a sample dynamic string, you can pass any number of arguments
```
