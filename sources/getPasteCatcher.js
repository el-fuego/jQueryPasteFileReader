/**
 * Create $('DIV') if global object
 * Return $(el) otherwise
 * @param el {DOM element}
 * @returns {$}
 */
function getPasteCatcher(el) {

    var catcher = $('#pasteCatcher');

    // not a global catching
    if (['body', 'window', 'document', window, document].indexOf(el) < 0) {
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
            left:     '100%',
            top:      '100%',
            width:    '1px',
            height:   '1px',
            opacity:  '0',
            overflow: 'hidden'
        })
        .appendTo('body');
}