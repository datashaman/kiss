const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
}
