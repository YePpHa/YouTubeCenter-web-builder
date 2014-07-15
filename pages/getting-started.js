module.exports = function(runtime, language, page) {
  return {
    title: language.getString(page.title),
    template: "standard",
    html: {
      header: runtime.loadFragment("header/header"),
      content: runtime.loadFragment("content/getting-started"),
      footer: runtime.loadFragment("footer/footer")
    }
  };
};