module.exports = (grunt) ->

  grunt.initConfig
    coffee:
      app:
        expand:  true
        bare:    true
        flatten: true
        cwd: 'sources'
        src: [
          '{**/,}*.coffee'
        ]
        dest: 'build'
        ext: '.tmp.js'

    concat:
      options:
        banner: """/**
         * Reads files pasted by ctrl-v
         * Type:    jQuery plugin
         * License: MIT
         * Author:  Pulyaev Y.A.
         * Site:    https://github.com/el-fuego/jQueryPasteFileReader
         *
         * Usage:
         *
         * $(window).pasteFileReader({
         *      asBinary: false,
         *      success: function (url, name) {},
         *      error:   function (event) {}
         * });
         */

         (function ($) {
         """
        footer: """
          })(jQuery);
          """
        separator: '\n\n'
      app:
        src: [
          'sources/definitions.js',
          'sources/defaults.js',
          'sources/patterns/*.js',
          'sources/clipboardParsers/*.js',
          'build/{**/,}*.tmp.js',
          'sources/*.js',
          'sources/jqueryPasteFileReader.js'
        ]
        dest: 'build/jqueryPasteFileReader.js'

    jsbeautifier:
      files: [
        "build/jqueryPasteFileReader.js"
      ]
      options:
        app:
          braceStyle:              "collapse"
          breakChainedMethods:     false
          e4x:                     false
          evalCode:                false
          indentChar:              " "
          indentLevel:             0
          indentSize:              4
          indentWithTabs:          false
          jslintHappy:             true
          keepArrayIndentation:    false
          keepFunctionIndentation: false
          maxPreserveNewlines:     10
          preserveNewlines:        true
          spaceBeforeConditional:  true
          spaceInParen:            false
          unescapeStrings:         false
          wrapLineLength:          0

    clean:
      app:
        src: [
          'build/{**/,}*.tmp.*'
        ]

    watch:
      app:
        files: [
          'sources/{**/,}*.{js,coffee}'
        ]
        tasks: ['default']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-jsbeautifier'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'default', ['coffee', 'concat', 'jsbeautifier', 'clean', 'watch']