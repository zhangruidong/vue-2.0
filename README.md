## Record my learning vue process


### 在项目中使用less

1. npm i less less-loader

2. 在webpack.base.conf.js 中配置rules
```js
{
  test: /\.less$/,
  loader: "style-loader!css-loader!less-loader"
}
```
