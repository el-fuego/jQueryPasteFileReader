patterns = {
    types: {
        binary: /^image\//i,
        html:   /^text\/html/i,
        text:   /^text\/(plain|uri)/i
    },

    content: {
        path:      /((https?|ftp|file):\/\/)?([\\\/][^\\\/])*[\\\/][^\\\/].[a-z0-9]+/i,
        dataImage: /^data:image/i,
        image:     /\.(png|gif|jpe?g|tiff)$/i,
        fileName:  /([^\\\/]+)$/i,
        html:      /<[a-z]+[^>]*>/i,
        localPath: /^([\/~]|\\[^\\]|[a-z]:)/i
    }
}