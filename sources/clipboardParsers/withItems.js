/**
 * Best browsers
 */
clipboardParsers.withItems = [

    // html data
    function (type, item, clipboardData, options) {

        if (patterns.types.html.test(type)) {

            item.getAsString(function (html) {
                return getImagesFromHtml(
                    html,
                    options
                );
            });
        }

        return false;
    },

    // binary data
    function (type, item, clipboardData, options) {
        if (patterns.types.binary.test(type)) {
            readFile(item.getAsFile(), options);
            return true;
        }

        return false;
    },

    // path as text or URI
    function (type, item, clipboardData, options) {

        if (patterns.types.text.test(type)) {
            item.getAsString(function (data) {

                if (!data) { return false; }

                if (patterns.content.html.test(data)) {
                    getImagesFromHtml(data, options);
                } else {
                    getFilesFromText(data, options);
                }
            });
            return true;
        }

        return false;
    }
];