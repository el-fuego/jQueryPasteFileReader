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
            if (event.ctrlKey && (event.keyCode || event.which) === 86) {
                $el.focus();
            }
        });


        $el.bind('paste', function (event) {

            var clipboardData = event.originalEvent.clipboardData,
                found = false,
                i;

            if (!clipboardData) {
                return readImagesFromCatchersHtml(options);
            }

            // IE
            // data types: URL, Text
            if (window.clipboardData) {
                callParsers('simply', [window.clipboardData, options]);
                return;
            }

            // Some dino browser
            // data types: html, uri-list, plain
            if (!clipboardData.types) {
                callParsers('withoutTypes', [clipboardData, options]);
                return;
            }

            // New browser
            // Check type not at items[].type for FF capability
            // data types: rew image, html, uri-list, plain

            // TODO: add sorting by priority
            // last matched item is complex object at chrome
            // but not at Firefox
            i = clipboardData.types.length;
            while (i-- && !found) {

                // FF
                if (!clipboardData.items) {
                    found = callParsers('withTypes', [clipboardData.types[i], clipboardData, options]);
                } else {
                    // Best browsers
                    found = callParsers('withItems', [clipboardData.types[i], clipboardData.items[i], clipboardData, options]);
                }
            }
            if (found) {
                event.stopPropagation();
                event.preventDefault();
            } else {
                readImagesFromCatchersHtml(options);
            }
        });
    });
}