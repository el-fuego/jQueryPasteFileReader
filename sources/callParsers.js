/**
 * Call each parser with given parameters
 * @param parserType {string}
 * @param args {Array}
 * @returns {boolean}
 */
function callParsers(parserType, args) {

    var i = 0,
        l = clipboardParsers[parserType].length;
    for (; i < l; i++) {
        if (clipboardParsers[parserType][i].apply(this, args) === true) {
            return true;
        }
    }
    return false;
}