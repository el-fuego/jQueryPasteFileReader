/**
 * Read html of pasteCatcher and get images
 * @param options {Object}
 * @param options.success {function}
 * @param options.error {function}
 * @param options.loadStart {function}
 * @param options.loadEnd {function}
 * @param options.progress {function}
 * @param options.asBinary {boolean} call .success() with binary data or URL
 */
function readImagesFromCatchersHtml(options) {

    setTimeout(function () {
        var html = $('#pasteCatcher').html();

        if (!html) { return; }

        if (patterns.content.html.test(html)) {
            getImagesFromHtml(html, options);
        } else {
            getFilesFromText(html, options);
        }

        $('#pasteCatcher').html('');
    }, 100);
}