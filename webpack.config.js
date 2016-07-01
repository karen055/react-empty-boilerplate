var path = require("path");

var src = "src";
var wwwroot = "wwwroot";
var app = "app.jsx";
var bundle = "bundle.js";
var publicPath = "js";


module.exports = {
    entry: {
        main: [path.join(__dirname, src, app)]
    },
    output: {
        path: path.join(__dirname, wwwroot),
        filename: path.join(publicPath, bundle),
        publicPath: `/${publicPath}/`
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, include: path.join(__dirname, src), loader: "babel-loader" }
        ]
    },
    plugins: []
};