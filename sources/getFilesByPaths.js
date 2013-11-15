/**
 * Get files by paths at string
 * Used for paste files at linux
 * @param data {string}
 * @param options {Object}
 * @param options.asBinary {boolean}
 * @param options.success {function}
 * @param options.error {function}
 * @return {boolean} is data found
 */
function getFilesByPaths(data, options) {

    var paths = data.replace(/[\r\t]/g, '').split('\n'),
        i = 0,
        l = paths.length;

    for (; i < l; i++) {

        if ((patterns.content.path.test(paths[i]) && patterns.content.image.test(paths[i])) || patterns.content.dataImage.test(paths[i])) {

            // add protocol
            if (patterns.content.localPath.test(paths[i]) && !patterns.content.dataImage.test(paths[i])) {
                paths[i] = 'file://' + paths[i];
            }

            // return URL for viewing only
            if (!options.asBinary) {
                options.success(paths[i], getFileName(paths[i]));
            } else {
                loadImageFile(paths[i], options);
            }
            return true;
        }
    }

    return false;
}