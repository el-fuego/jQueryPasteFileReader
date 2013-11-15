/**
 * Create $('DIV') if global object at CE mode
 * Return $(el) otherwise
 * @param el {DOM element}
 * @returns {$}
 */
function getPasteCatcher(el) {

    // create DIV if global object at CE mode

    var catcher = $('#pasteCatcher');

    // not at CE mode or not a global catching
    if (!needContentEditable || ['body', 'window', 'document', window, document].indexOf(el) < 0) {
        return $(el);
    }

    // cather exists
    if (catcher.length) {
        return catcher;
    }

    return $('<div>')
        .attr('id', 'pasteCatcher')
        .css({
            position: 'absolute',
            left:    '100%',
            top:     '100%',
            opacity: 0
        })
        .appendTo('body');
}