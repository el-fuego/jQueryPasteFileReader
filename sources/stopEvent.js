/**
 * stopPropagation && preventDefault
 * @param event {event}
 * @returns {boolean}
 */
function stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
}