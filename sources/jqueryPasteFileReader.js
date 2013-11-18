/**
 * Read binary file (pasted raw data or from input)
 * @param options {Object}
 * @param options.success {function}
 * @param options.error {function}
 * @param options.loadStart {function}
 * @param options.loadEnd {function}
 * @param options.progress {function}
 * @param options.asBinary {boolean} call .success() with binary data or URL
 */
$.fn.pasteFileReader = function (options) {
    options = $.extend({}, defaults, options || {});

    // bind to each element
    this.each(function () {

        var $el = getPasteCatcher(this);

        // setup paste event
        $el.attr('contentEditable', 'true');

        // need to be focused
        $(window).off('keydown.paste').on('keydown.paste', function(event) {
            // ctrl + v || cmd + v
            if ((event.ctrlKey || event.metaKey) && (event.keyCode || event.which) === 86) {
                $el.focus();
            }
        });


        $el.bind('paste', function (event) {

            var clipboardData = event.originalEvent.clipboardData,
                found = false,
                i,
                l,
                typesIndexes;

            if (!clipboardData) {
                readImagesFromCatchersHtml(options);
                return stopEvent(event);
            }

            // IE
            // data types: URL, Text
            if (window.clipboardData) {
                callParsers('simply', [window.clipboardData, options]);
                return stopEvent(event);
            }

            // FF
            // data types: binary
            // *Note: clipboardData.files[i] access is blocked at browser console, but not at code
            if (clipboardData.files && clipboardData.files.length) {
                l = clipboardData.files.length;
                for (i = 0; i < l && !found; i++) {
                    try {
                        readFile(clipboardData.files[i], options);
                    } catch (e) {
                        options.error(e);
                        return stopEvent(event);
                    }
                }
                return stopEvent(event);
            }

            // Some dino browser
            // data types: html, uri-list, plain
            if (!clipboardData.types) {
                callParsers('withoutTypes', [clipboardData, options]);
                return stopEvent(event);
            }

            // New browser
            // Check type not at items[].type for FF capability
            // data types: binary, html, uri-list, plain
            // sort by priority for using more complex object
            typesIndexes = getSortedIndexes(clipboardData.types);
            l = typesIndexes.length;
            for (i = 0; i < l && !found; i++) {

                // FF
                if (!clipboardData.items) {
                    found = callParsers('withTypes', [
                        clipboardData.types[typesIndexes[i]],
                        clipboardData,
                        options
                    ]);
                } else {
                    // Best browsers
                    found = callParsers('withItems', [
                        clipboardData.types[typesIndexes[i]],
                        clipboardData.items[typesIndexes[i]],
                        clipboardData,
                        options
                    ]);
                }
            }
            if (found) {
                return stopEvent(event);
            }

            readImagesFromCatchersHtml(options);
        });
    });
}