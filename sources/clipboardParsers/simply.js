/**
 * IE
 */
clipboardParsers.simply = [
    function (clipboardData, options) {

        var data = clipboardData.getData('URL') || clipboardData.getData('Text') || false;
        if (!data) { return false; }

        if (patterns.content.html.test(data)) {
            return getImagesFromHtml(data, options);
        }
        return getFilesByPaths(data, options);
    }
];