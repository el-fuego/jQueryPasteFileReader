patterns = {
    types: {
        binary: /^image\//i,
        html:   /^text\/html/i,
        text:   /^text\/(plain|uri)/i
    },

    content: {
        path:      /((https?|ftp|file):\/\/)?([a-z]:|~|([a-z0-9_\-]+\.)+[a-z0-9_\-]+)?([\\\/][^\\\/]+)*[\\\/][^\\\/]*\.[a-z0-9]+/i,
        dataImage: /^data:image/i,
        image:     /\.(png|gif|jpe?g|tiff)$/i,
        fileName:  /([^\\\/]+)$/i,
        html:      /<img+[^>]*>/i,
        localPath: /^([\/~]|\\[^\\]|[a-z]:)/i
    }
}