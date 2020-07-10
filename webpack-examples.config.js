const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = ['shapes', 'polygon_anim'];

const entry = entries.reduce((acc, filename) => {
	acc[filename] = `./examples/src/${filename}.js`;
	return acc;
}, {});

const htmlPlugins = entries.map(
	filename =>
		new HtmlWebpackPlugin({
			inject: true,
			template: './example/src/_template.html',
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
