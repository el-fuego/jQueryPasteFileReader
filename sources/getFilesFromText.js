/**
 * Get files by paths, URLs or dataURLs
 * Used for paste files at linux
 * @param data {string}
 * @param options {Object}
 * @param options.asBinary {boolean}
 * @param options.success {function}
 * @param options.error {function}
 * @return {boolean} is data found
 */
function getFilesFromText(data, options) {

    // global pattern must be announced as local variable
    var pathPattern = /(((https?|ftp|file):\/\/)?([a-z]:|~|([a-z0-9_\-]+\.)+[a-z0-9_\-]+)?([\\\/][^\\\/\n]+)*[\\\/][^\\\/\n]*\.(png|jpe?g|gif|tiff))/gi,
        dataImagePattern = /(data:image[^\s\n]+)/gi,
        found = false;

    found = getFilesByPattern(data, pathPattern, options) || found;
    found = getFilesByPattern(data, dataImagePattern, options) || found;

    return found;
}