var clipboardParsers = {},
    defaults,
    patterns,

    // chrome only supports paste without contentEditable elements
    needContentEditable = !(/chrome/i).test(window.navigator.userAgent);