/**
 * Get file name with exhibition from path
 * @param path {string}
 * @returns {string}
 */
function getFileName(path) {
    var matchedName = path.match(patterns.content.fileName);
    return matchedName ? matchedName[0] : '';
}