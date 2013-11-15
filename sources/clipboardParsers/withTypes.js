/**
 * FF
 */
clipboardParsers.withTypes = [

    // html data
    function (type, clipboardData, options) {
        if (patterns.types.html.test(type)) {
            return clipboardParsers.withoutTypes[0](clipboardData, options);
        }
        return false;
    },

    // path as text or URI
    function (type, clipboardData, options) {
        if (patterns.types.text.test(type)) {
            return clipboardParsers.withoutTypes[1](clipboardData, options);
        }
        return false;
    }
];