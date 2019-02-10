let path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	isDevMode = process.env.NODE_ENV !== 'production';

let conf = {
	// Точка(-и) входа
	entry: [
		'./src/index.js',
		'./src/mainpage.css',
		'./src/page.css'
	],
	// Точка выхода
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		// Относительный адрес ссылки на файлы с ресурсами для dev-сервера
		publicPath: 'dist/'
	},
	devServer: {
		// Показывать ошибки компиляции в браузере
		overlay: true
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
						loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader
					},
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin()
	]
};

module.exports = (env, options) => {
	let isProduction = options.mode === 'production';

	conf.devtool = isProduction ? false : 'eval-sourcemap';

	return conf;
};