module.exports = function(grunt, config) {
  function escapeHTML(str) {
    var entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    };
    return str.replace(/[&<>'"]/g, function(entity) {
      return entities[entity];
    });
  }
  
  function getHTML(runtime, language) {
    var html = "";
    var pages = config.pages;
    
    for (var key in pages) {
      if (pages.hasOwnProperty(key) && pages[key].navigation) {
        var obj = {
          url: "/" + runtime.getURLPrefix() + key + ".html",
          title: language.getString(pages[key].title)
        };
        html += (key === runtime.getActivePage() ? itemActive : item).replace(/\$\{([0-9a-zA-Z\.\-\_]+)(#([0-9a-zA-Z\.\-\_]+))?\}/g, function(match, string, p1, encode){
          var value = obj[string];
          if (encode === "html") {
            value = escapeHTML(value);
          }
          return value;
        });
      }
    }
    
    return html;
  }
  var item = grunt.file.read(config.dir.fragments + "header/nav-items.frag");
  var itemActive = grunt.file.read(config.dir.fragments + "header/nav-items-active.frag");
  
  return {
    getHTML: getHTML
  };
};