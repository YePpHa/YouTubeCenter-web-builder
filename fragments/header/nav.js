module.exports = function(grunt, config) {
  function getHTML(runtime, language) {
    var file = grunt.file.read(config.dir.fragments + "header/nav.frag");
    var frag = runtime.loadFragment("header/nav-items");
    var fragLang = runtime.loadFragment("header/nav-language");
    
    var obj = {
      "frag-nav-items": frag.getHTML(runtime, language),
      "frag-language-items": fragLang.getHTML(runtime, language)
    };
    
    file = language.toLanguage(file, "fragments/header/nav");
    file = runtime.replace(file, obj);
    
    return file;
  }
  
  return {
    getHTML: getHTML
  };
};