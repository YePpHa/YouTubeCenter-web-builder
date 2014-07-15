module.exports = function(grunt, config, page) {
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
    runtime.setActivePage(page);
    
    var pageConfig = page_module(runtime, language, config.pages[page]);
    var template = template_module(grunt, config);
    
    var html = template.getHTML(pageConfig.template, language);
    
    html = html.replace(/\$\{([0-9a-zA-Z\.\-\_]+)?\}/g, function(match, id){
      if (id === "page-title") {
        return escapeHTML(pageConfig.title);
      }
      if (id in pageConfig.html) {
        return pageConfig.html[id].getHTML(runtime, language);
      }
      
      return "${" + id + "}";
    });
    
    runtime.setActivePage(null);
    
    return html;
  }
  
  var page_module = require("./pages/" + page + ".js");
  var template_module = require("./template.js");
  
  return {
    getHTML: getHTML
  };
};