module.exports = function(grunt, config, fragment) {
  function getHTML(runtime, language) {
    return language.toLanguage(grunt.file.read(config.dir.fragments + fragment + ".frag"), "fragments/" + fragment);
  }
  
  return {
    getHTML: getHTML
  };
};