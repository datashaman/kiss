const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        copycode: "./resources/js/copycode.js",
        single: "./resources/js/single.js",
        site: "./resources/js/site.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "static/js")
    },
    watch: true,
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ]
};
