var sortedTypes = [
    'binary',
    'html',
    'text'
];

/**
 * Sort indexes by mime types
 * @param types {Array}
 * @returns {Array}
 */
function getSortedIndexes(types) {

    var i = 0,
        l = sortedTypes.length,
        j,
        typesIndexes = [];

    for (; i < l; i++) {

        j = types.length;

        while (j--) {
            if (patterns.types[sortedTypes[i]].test(types[j])) {
                typesIndexes.push(j);
                break;
            }
        }
    }

    return typesIndexes;
}