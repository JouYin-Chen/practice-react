# Start

## 環境建置
  1. index.html
      - webpack 有套件(HtmlWebpackPlugin)可以簡化自己建立html
  2. eslint
```
    yarn add -DE eslint eslint-plugin-react babel-eslint
```
  3. Setting Up React and Babel
  - 安裝 babel-preset-es2015、babel-preset-react，轉譯 ES6 和 JSX 開發環境用的套件，並於根目錄底下設定 .babelrc，設定轉譯規則（presets：es2015、react）和使用的外掛
```
    yarn add -DE babel-core babel-loader babel-preset-es2015 babel-preset-env babel-preset-react
```

  5. install webpack, webpack-cli
    `npm i webpack, webpack-cli -DE`
  6. html-webpack-plugin
     - 安裝`npm i html-webpack-plugin -DE`
     - 設定 webpack.config.js
```js
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
        template: `${__dirname}/app/index.html`,
        filename: 'index.html',
        inject: 'body',
    })
    module.exports = {
        plugins: [ HTMLWebpackPluginConfig ]
    }
```

  7. webpack-dev-server
     - 安裝`npm i webpack-dev-server -g -DE`
     - 設定 package.json
```json
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors --content-base build"
  },
```

## go to dev
