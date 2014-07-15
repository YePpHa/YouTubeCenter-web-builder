module.exports = function () {
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
  
  function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  
  function replace(str, obj, prefix) {
    var reg = new RegExp("\\$\\{" + (prefix ? escapeRegExp(prefix) : "") + "(.*?)(#(.*?))?\\}", "g");
    
    return str.replace(reg, function(match, string, p1, encode){
      var value = obj[string];
      if (encode === "html") {
        value = escapeHTML(value);
      }
      return value;
    });
  }
  
  return replace;
};