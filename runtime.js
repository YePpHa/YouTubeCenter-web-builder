module.exports = function(grunt, config) {
  function loadFragment(fragment) {
    var dir = config.dir.fragments;
    if (grunt.file.exists(dir + fragment + ".js")) {
      var module = require(dir + fragment + ".js");
      return module(grunt, config);
    } else if (grunt.file.exists(dir + fragment + ".frag")) {
      var module = require("./fragment.js");
      return module(grunt, config, fragment);
    } else {
      throw grunt.util.error("Fragment " + fragment + " was not found!");
    }
  }
  
  function loadPage(page) {
    var dir = config.dir.pages;
    
    if (grunt.file.exists(dir + page + ".js")) {
       var module = require("./page.js");
       return module(grunt, config, page);
    } else {
      throw grunt.util.error("Page " + page + " was not found!");
    }
  }
  
  function getActivePage() {
    return activePage;
  }
  
  function setActivePage(page) {
    activePage = page;
  }
  
  function getConfig() {
    return config;
  }
  
  function getURLPrefix() {
    return urlPrefix;
  }
  
  function setURLPrefix(prefix) {
    urlPrefix = prefix;
  }
  
  var activePage = null;
  var urlPrefix = "";
  
  return {
    loadFragment: loadFragment,
    loadPage: loadPage,
    getConfig: getConfig,
    getActivePage: getActivePage,
    setActivePage: setActivePage,
    getURLPrefix: getURLPrefix,
    setURLPrefix: setURLPrefix,
    replace: require("./token-replace.js")()
  };
};