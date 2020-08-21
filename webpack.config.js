let path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = process.env.NODE_ENV !== 'production';

let conf = {
  // Точка(-и) входа
  entry: './src/index.js',
  // Точка выхода
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // Относительный адрес ссылки на файлы с ресурсами для dev-сервера
    publicPath: '/'
  },
  devServer: {
    // Показывать ошибки компиляции в браузере
    overlay: true,
    contentBase: [
      path.resolve(__dirname, './api'),
      path.resolve(__dirname, './dist')
    ],
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '',
        },
      }
    }
  },
  module: {
    rules: [
      // Подключение Babel загрузчика
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevMode,
              esModule: true,
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
};

module.exports = (env, options) => {
  let isProduction = options.mode === 'production';

  conf.devtool = isProduction ? false : 'eval-sourcemap';

  return conf;
};
