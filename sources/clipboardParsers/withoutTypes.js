/**
 * Old browsers
 * used for FF
 */
clipboardParsers.withoutTypes = [

    function (clipboardData, options) {

        var data = clipboardData.getData('text/html') || false;
        if (!data) { return false; }

        return getImagesFromHtml(
            data,
            options
        );
    },

    function (clipboardData, options) {

        var data = clipboardData.getData('text/uri-list') || clipboardData.getData('text/plain') || false;
        if (!data) { return false; }

        if (patterns.content.html.test(data)) {
            return getImagesFromHtml(data, options);
        } else {
            return getFilesByPaths(data, options);
        }
    }
];