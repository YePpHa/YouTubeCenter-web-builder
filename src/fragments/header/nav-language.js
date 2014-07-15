module.exports = function(grunt, config) {
  function getHTML(runtime, language) {
    var html = "";
    var languages = config.languages;
    
    for (var i = 0, len = languages.length; i < len; i++) {
      var key = languages[i];
      var obj = {
        title: language.getString("language", key)
      };
      if (config.language === key) {
        obj.url = "/" + runtime.getActivePage() + ".html";
      } else {
        obj.url = "/" + config["languages-path"] + key + "/" + runtime.getActivePage() + ".html";
      }
      html += runtime.replace((key === language.getLanguageCode() ? itemActive : item), obj);
    }
    
    return html;
  }
  var item = grunt.file.read(config.dir.fragments + "header/nav-language.frag");
  var itemActive = grunt.file.read(config.dir.fragments + "header/nav-language-active.frag");
  
  return {
    getHTML: getHTML
  };
};