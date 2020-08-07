const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const exampleSrc = './examples/src/';

// getting all .js fileds from exampleSrc
const files = fs.readdirSync(exampleSrc);
const entries = files
	.filter(f => f.lastIndexOf('.js') === f.length - 3)
	.map(f => f.substr(0, f.length - 3));

// creating a map object of file name to file path
const entry = entries.reduce((acc, filename) => {
	acc[filename] = `${exampleSrc}${filename}.js`;
	return acc;
}, {});

// creating an HTMLPlugin for each entry
const htmlPlugins = entries.map(
	filename =>
		new HtmlWebpackPlugin({
			inject: true,
			template: `${exampleSrc}_template.html`,
			chunks: [filename],
			filename: `${filename}.html`,
		})
);

module.exports = {
	mode: 'development',
	entry,
	output: {
		path: path.resolve(__dirname, './examples'),
		filename: '[name].js',
	},
	plugins: [...htmlPlugins],
};
