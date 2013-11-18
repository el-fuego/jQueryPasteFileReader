/**
 * Get files patterns
 * @param data {string}
 * @param options {Object}
 * @param options.asBinary {boolean}
 * @param options.success {function}
 * @param options.error {function}
 * @return {boolean} is data found
 */
function getFilesByPattern(data, pattern, options) {

    var mathedData,
        found = false;

    while (matchedData = pattern.exec(data)) {

        // add protocol
        if (patterns.content.localPath.test(matchedData[1]) && !patterns.content.dataImage.test(matchedData[1])) {
            matchedData[1] = 'file://' + matchedData[1];
        }

        // return URL for viewing only
        if (!options.asBinary) {
            options.success(matchedData[1], getFileName(matchedData[1]));
        } else {
            loadImageFile(matchedData[1], options);
        }
        found = true;
    }

    return found;
}