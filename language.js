module.exports = function(grunt, config, language) {
  function toLanguage(html, page) {
    var filename = dir + page + ".json";
    var locales = JSON.parse(JSON.stringify(general));
    
    if (typeof page === "string" && grunt.file.exists(filename)) {
      var file = grunt.file.readJSON(filename);
      for (var key in file) {
        if (file.hasOwnProperty(key)) {
          locales[key] = file[key];
        }
      }
    }
    
    return replace(html, locales, "lang#");
  }
  
  function getString(locale, langCode) {
    var lang = null;
    if (typeof langCode === "string") {
      lang = grunt.file.readJSON(config.dir.languages + langCode + "/general.json")
    } else {
      lang = general;
    }
    return lang[locale];
  }
  
  function getLanguageCode() {
    return language;
  }
  
  var dir = config.dir.languages + language + "/";
  var general = grunt.file.readJSON(dir + "general.json");
  
  var replace = require("./token-replace.js")();
  
  return {
    toLanguage: toLanguage,
    getString: getString,
    getLanguageCode: getLanguageCode
  };
};