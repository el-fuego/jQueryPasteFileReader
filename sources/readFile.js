/**
 * Read binary file (pasted raw data or from input)
 * @param file {File}
 * @param options {Object}
 * @param options.success {function}
 * @param options.error {function}
 * @param options.loadStart {function}
 * @param options.loadEnd {function}
 * @param options.progress {function}
 * @param options.asBinary {boolean} call .success() with binary data or URL
 */
function readFile(file, options) {

    var reader = new FileReader();
    reader.onload = function (evt) {
        options.success(evt.result, getFileName(file.name || ''));
    };
    reader.onerror =     options.error;
    reader.onloadstart = options.loadStart;
    reader.onloadend =   options.loadEnd;
    reader.onprogress =  options.progress;
    try {
        reader[options.asBinary ? 'readAsBinaryString' : 'readAsDataURL'](file);
    } catch (e) {
        options.error(e);
    }
}