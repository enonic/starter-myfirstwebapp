var thymeleaf = require('/lib/thymeleaf'); // Load template engine

var view = resolve('hello.html') // Lookup template file
var model = { // Build model object
  title: "Hello Web app"
};

exports.get = function (req) {
  body: thymeleaf.render(view, model) // Render page
};
