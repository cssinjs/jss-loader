# JSS Loader for Webpack

**WARNING: This project is still experimental and not yet ready for production.**

Use JavaScript as your CSS preprocessor!

Dynamically create CSS by executing JavaScript at build time. Export your styles in the [JSS](https://github.com/jsstyles/jss) format and they'll be converted into regular CSS.

## Install

```bash
$ npm install --save jss-loader
```

## Usage

Simply export an object of styles from your JavaScript file:

```js
module.exports = {
  '.hello': {
    color: 'blue'
  },
  '.world': {
    color: 'green'
  }
};
```

This loader is designed to export global CSS selectors, so it's recommended to use this loader in tandem with [CSS Modules](https://github.com/css-modules/css-modules) via [css-loader](https://github.com/webpack/css-loader) to create locally scoped class names.

```js
var styles = require('css?modules!jss!./component.jss.js');

var html = '<div class="' + styles.hello + '">Hello World!</div>';
```

### JSS Plugins

In order to use [JSS plugins](https://github.com/jsstyles/jss/blob/master/readme.md#plugins), simply define the `jssLoader.plugins` option in your [Webpack config](http://webpack.github.io/docs/configuration.html).

``` javascript
module.exports = {
  module: {
    loaders: [...]
  },
  jssLoader: {
    plugins: [
      require('jss-nested'),
      require('jss-extend'),
      require('jss-vendor-prefixer'),
      require('jss-camel-case'),
      require('jss-props-sort'),
      require('jss-px')
    ]
  }
};
```

If required, you can change the options key with the `config` query parameter: `"css!jss?config=jssLoaderCustom"`.

## External Documentation

[JSS](https://github.com/jsstyles/jss)

[Webpack: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Thanks

 - [Oleg Slobodskoi](https://github.com/kof) for writing JSS. What an awesome project. I'm so glad I found a way that CSS Modules and JSS could be friends at last.
 - [Andrey Popp](https://github.com/andreypopp) for creating [Styling](https://github.com/andreypopp/styling), the main influence for this project.
 - [Tobias Koppers](https://github.com/sokra) for writing [val-loader](https://github.com/webpack/val-loader), which served as the foundation of this loader. Oh, and for writing [Webpack](http://webpack.github.io/).

## License

[MIT License](http://markdalgleish.mit-license.org/)
