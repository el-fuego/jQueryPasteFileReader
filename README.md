jQueryPasteFileReader
====================

Reads images and other files pasted by ctrl-v from clipboard to browser

####<a href="http://htmlpreview.github.io/?https://github.com/el-fuego/images-to-sites-previews/blob/master/index.html">View demo online</a>

####<a href="https://raw.github.com/el-fuego/jQueryPasteFileReader/master/build/jqueryPasteFileReader.js">Download plugin</a>




#### Usage example
```js
$(window).pasteFileReader({

      // call .success() with binary data or URL
      asBinary: false,

      /**
      * @param url {string|*}
      * @param name {string}
      */
      success: function (url, name) {},

      /**
      * @param [event] {object} FileReader event error
      */
      error:   function (event) {}
});
```
**success()** will be called for each pasted file<br>
**error()**   will be called if we know about reading trouble only and not for pasted data recognition error



#### Readable objects
 * image binary data (image copy from browser)
 * image binary data as HTML (image at html page)
 * image from HTML data (page selection or code from editor)
 * image from plain text
 * file from file manager (windows) *
 * file from file manager as plain text (linux) *

*Note: some browsers blocks local files reading for security reasons. It is Chrome and Opera for a now
 
Single and multiple files paste is supported both


#### Supported URL formats
 * web URL (http, https, ftp)
 * dataURLs (data:image..)
 * local path (/home/.., c:\\.., file://..) *
 



#### More
```js
$('.my-paste-catcher').pasteFileReader({
      asBinary:   false,
      success:    function (url, name) {},
      error:      function (event) {},
      loadStart:  function (event) {},
      loadEnd:    function (event) {},
      progress:   function (event) {}
});
```
See **FileReader** documentation for event description
