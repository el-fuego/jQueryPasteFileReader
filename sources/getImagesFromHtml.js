/**
 * Get files from <img> tags
 * some image binary is copied thus
 * @param html {string}
 * @param options {Object}
 * @param options.asBinary {boolean}
 * @param options.success {function}
 * @param options.error {function}
 * @return {boolean} is data found
 */
function getImagesFromHtml(html, options) {

    // global pattern must be announced as local variable
    var pattern = /<img[^>]+?src=(["'])([^>]+?)\1/ig,
        urlMatch,
        found = false;

    while (urlMatch = pattern.exec(html)) {
        found = getFilesByPaths(urlMatch[2], options) || found;
    }

    return found;
}