module.exports = function(grunt, config) {
  function getHTML(runtime, language) {
    var file = grunt.file.read(config.dir.fragments + "header/header.frag");
    var frag = runtime.loadFragment("header/nav");
    
    file = language.toLanguage(file, "fragments/header/header");
    
    file = runtime.replace(file, {
      "home-url": "/" + runtime.getURLPrefix() + "index.html",
      "frag-nav": frag.getHTML(runtime, language)
    });
    
    return file;
  }
  
  return {
    getHTML: getHTML
  };
};