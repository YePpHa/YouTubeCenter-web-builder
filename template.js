module.exports = function(grunt, config) {
  function getHTML(template, language) {
    return language.toLanguage(grunt.file.read(config.dir.templates + template + ".frag"), "templates/" + template);
  }
  
  return {
    getHTML: getHTML
  }
};