/**
 * Try to load image by path or URL
 * local images is unreadable
 * @param path {string}
 * @param options {Object}
 * @param options.success {function}
 * @param options.error {function}
 */
function loadImageFile(path, options) {

    var img = new Image();
    img.src = path;
    img.onload = function () {

        // Create an empty canvas element
        var canvas = document.createElement("canvas"),
            ctx;
        canvas.width =  this.width;
        canvas.height = this.height;

        // Copy the image contents to the canvas
        ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        try {
            // crossDomain is blocked
            options.success(
                ctx.getImageData(0, 0, canvas.width, canvas.height),
                getFileName(this.src)
            );
        } catch (e){
            options.error();
            return;
        }
    }
    img.onerror = options.error;
}