const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = ['shapes', 'polygon_anim'];
const exampleSrc = './examples/src/';

const entry = entries.reduce((acc, filename) => {
	acc[filename] = `${exampleSrc}${filename}.js`;
	return acc;
}, {});

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
