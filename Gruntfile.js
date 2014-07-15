module.exports = function(grunt) {
  function createFile(name, content) {
    grunt.file.write(config.dir.build + name, content);
  }
  function dumpError(err) {
    if (typeof err === 'object') {
      if (err.message) {
        console.log('\nMessage: ' + err.message)
      }
      if (err.stack) {
        console.log('\nStacktrace:')
        console.log('====================')
        console.log(err.stack);
      }
    } else {
      console.log('dumpError :: argument is not an object');
    }
  }
  
  function buildLanguage(lang) {
    try {
      var runtime = runtime_module(grunt, config);
      var language = language_module(grunt, config, lang);
      
      var prefix = "";
      
      if (config.language !== lang) {
        prefix = "languages/" + lang + "/";
        runtime.setURLPrefix(prefix);
      }
      
      var pages = config.pages;
      for (var key in pages) {
        if (pages.hasOwnProperty(key)) {
          var page = runtime.loadPage(key);
          grunt.log.writeln("Loaded page");
          
          createFile(prefix + key + ".html", page.getHTML(runtime, language));
        }
      }
    } catch (e) {
      dumpError(e);
    }
  }
  
  var config = grunt.file.readJSON("./config.json");
  var runtime_module = require("./runtime.js");
  var language_module = require("./language.js");
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.initConfig({
    copy: {
      resources: {
        files: [
          { expand: true, cwd: config.dir.resources, dest: config.dir.build, src: ["**/*"] }
        ]
      }
    },
    clean: {
      pre: [config.dir.build]
    }
  });
  
  grunt.registerTask("default", [
    "clean:pre",
    "build",
    "copy:resources"
  ]);
  
  grunt.task.registerTask("build", "Building the web app.", function(){
    var languages = config.languages;
    for (var i = 0, len = languages.length; i < len; i++) {
      buildLanguage(languages[i]);
    }
  });
};