# Start

趁著最近有時間，從webpack開始到redux將react重新寫過，webpack跟react都有更新版本，也趁這次機會再次學習並做一些記錄。
若有時間會將svg, d3也加入。

## 環境建置
1. index.html
  - webpack 有套件(HtmlWebpackPlugin)可以簡化自己建立html

2. eslint
  - coding style設置，在coding時可以提示需要修改的地方
  `$ yarn add -DE eslint eslint-plugin-react babel-eslint`

3. Setting Up React and Babel
  - 安裝 babel-preset-es2015、babel-preset-react，轉譯 ES6 和 JSX 開發環境用的套件，並於根目錄底下設定 .babelrc，設定轉譯規則（presets：es2015、react）和使用的外掛
  `$ yarn add -DE babel-core babel-loader babel-preset-es2015 babel-preset-env babel-preset-react`

4. webpack, webpack-cli
  `$ yarn add webpack, webpack-cli -DE`

5. html-webpack-plugin
  - 環境建置的第一點有提到，可以簡化自己創建html
  - 安裝 `$ yarn add html-webpack-plugin -DE`
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

6. webpack-dev-server
  - webpack-dev-server 是小型的node.js express server，可以提供LiveReload的功能。
  - 安裝`$ yarn add global webpack-dev-server -DE`
  - 設定 package.json
    ```json
    "scripts": {
        "dev": "webpack-dev-server --devtool eval --progress --colors --content-base build"
    }
    ```
## Develop

- react-router
  - 在react-router更新成v4，這次只有import react-router-dom 即可，若要搭配redux則需要再import react-router-redux
    `$ yarn add -SE react-router-dom`
  - Conpoment
    - `<BrowserRouter>`: HTML5 history API的component，用來讓UI 跟URL保持一致
    - `<Route>`: 為router最重要的component，當訪問頁面跟router path一致時，將頁面渲染成對應的component
    - `<Link>`: 跳轉到指定的路徑
    - `<Switch>`: 只渲染第一個router path的<Route> 或 <Redirect>
    - `<Redirect>`: 訪問路徑時會跳轉到另一個路徑，範例：`<Redirect from='*' to='/404' >`
    - `<Prompt>`: 在離開頁面之前能夠跳出視窗提示用戶頁面即將跳轉

- history
  > - "browser history" - history 在 DOM 上的實現，用於支持 HTML5 history API 的瀏覽器
  > - "hash history" - history 在 DOM 上的實現，用於舊版瀏覽器
  > - "memory history" - history 在內存上的實現，用於測試或非 DOM 環境（例如 React Native）

- webpack plugin
  1. babel-plugin-transform-object-rest-spread, 可以使用
  ```
    const x = {x: 1, y: 2, a: 3, b: 4}
    console.log(...x)
  ```
  2. babel-plugin-transform-decorators-legacy
    - Decorators like @autobind can be used
  3. babel-plugin-transform-class-properties
    - 在react 裡使用arrow function

- CSS module
  - 加載 css-loader, style-loader
    - 使用css-loader先讀取css檔案成為JSON字串，然後把讀到的CSS-JSON字串再用style-loader讓網頁在實際執行
    - 安裝 `$npm install css-loader style-loader --save-dev`
    - 設定 webpack
      ```
      ...
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      ```

  - postcss
    - css 處理器分為兩種，post-processor & pre-processor, pre-processor可以在css時擁有變數的功能，使用變數就可以減去多次修改的麻煩。還有在css屬性必須加上prefix，讓瀏覽器能夠使用，post-processor就可以處理這件事。
    - postcss可以將需要的功能加入。支援加入變數或是mixin，增加瀏覽器的prefix。posscss功能有兩個，一是將css解析成js可以操作的Abstract Syntax Tree結構，二則是使用plugin來處理Abstract Syntax Tree並得到結果。而並非只是post-processor or pre-processor而已。
    - 安裝 `npm install postcss-loader --save-dev`
    - 其他plugins
      - postcss-cssnext 可以使用未來的css特性，variable, autoprefixer, :: pseudo syntax...etc
      - postcss-import 可以在css使用`@import`

  - CSS-Modules
    - 之前使用的是`css-modules`，但作者將不維護此package，並推薦使用`babel-plugin-react-css-modules`，所以此使用這個package來寫css。
    - 安裝 `npm install babel-plugin-react-css-modules --save-dev`
    - webpack使用postcss-loader解析css。 css-loader, style-loader
    `npm install postcss-loader css-loader --save-dev`
    - 設定.babelrc
      ```
      ...
      "plugins": [
        ["react-css-modules", {
          "option": "value",
          "generateScopedName": "[name]_[local]_[hash:base64:5]",
          "webpackHotModuleReloading": true,
          "handleMissingStyleName": "warn"
        }]
      ]
    ```
