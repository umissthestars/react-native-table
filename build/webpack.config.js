
module.exports = {
    entry: {
        main: "../src/js/table.jsx",
        // util: "../src/js/util.jsx",
        // temp: "../src/js/temp.js",
        // mixin: "../src/js/mixin.jsx",
    },
    output: {
        // path: "../dist/",
        filename: "table.js",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/,  loader: "jsx-loader" },
            { test: /\.js$/, loader: "babel-loader" },
        ]
    } 
};