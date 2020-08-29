const path = require('path');
const fs = require('fs');
const RemovePlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const trialsDir = './trials';
const srcDir = `${trialsDir}/src/`;
const distDir = `${trialsDir}/dist/`;

// getting all .js fileds from srcDir
const files = fs.readdirSync(srcDir);
const entries = files
	.filter(f => f.lastIndexOf('.ts') === f.length - 3)
	.map(f => f.substr(0, f.length - 3));

// creating a map object of file name to file path
const entry = entries.reduce((acc, filename) => {
	acc[filename] = `${srcDir}${filename}.ts`;
	return acc;
}, {});

// creating an HTMLPlugin for each entry
const htmlPlugins = entries.map(
	filename =>
		new HtmlWebpackPlugin({
			inject: true,
			template: `${srcDir}_template.html`,
			chunks: [filename],
			filename: `${filename}.html`,
		})
);

module.exports = {
	mode: 'development',
	//entry: './src/index.ts',
	entry,
	devtool: 'inline-source-map',
	/*
	output: {
		libraryTarget: 'commonjs',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	*/
	output: {
		path: path.resolve(__dirname, distDir),
		filename: '[name].js',
	},

	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
				exclude: /node-modules/,
			},
		],
	},
	plugins: [
		/*
		new RemovePlugin({
			before: {
				include: [distDir],
				// parameters for "before normal compilation" stage.
			},
			watch: {
				include: [distDir],
				// parameters for "before watch compilation" stage.
			},
		}),
		*/
		...htmlPlugins,
	],
};
