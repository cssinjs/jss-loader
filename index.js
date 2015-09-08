var jss = require('jss');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  var sheet, plugins, rules;
  var query = loaderUtils.parseQuery(this.query);
  var configKey = query.config || 'jssLoader';

  if (query.cacheable && this.cacheable) {
    this.cacheable();
  }

  if (this.inputValue) {
    return null, this.inputValue;
  } else {
    plugins = this.options[configKey] && this.options[configKey].plugins || [];

    sheet = jss.create();

    plugins.forEach(function(plugin) {
      sheet = sheet.use(plugin);
    });

    rules = this.exec(content, this.resource);

    return sheet
      .createStyleSheet(rules, { named: false })
      .toString();
  }
}
