const path = require("path");
const RemovePlugin = require("remove-files-webpack-plugin");

console.log(
	">>>>>>>>>>>>>>>>>>>>>> +++++++++++++++++++++++++++++++++++++++++++++++++ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
);

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	output: {
		libraryTarget: "commonjs",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
				exclude: /node-modules/,
			},
		],
	},
	plugins: [
		new RemovePlugin({
			before: {
				include: ["./dist"],
				// parameters for "before normal compilation" stage.
			},
			watch: {
				include: ["./dist"],
				// parameters for "before watch compilation" stage.
			},
		}),
	],
};
