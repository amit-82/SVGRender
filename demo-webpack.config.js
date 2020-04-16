const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(
	"DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO"
);

module.exports = {
	mode: "development",
	entry: "./example/src/index.js",
	output: {
		path: path.resolve(__dirname, "./example"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./example/src/_template.html",
			filename: "index.html",
		}),
	],
};
