const { override, fixBabelImports, adjustStyleLoaders, addPostcssPlugins, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rewireEslint = require('react-app-rewired-eslint');
// 补充：对开发友好，打包完成桌面提醒
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const path = require('path')
const paths = require('react-scripts/config/paths')
// path
const resolveAlias = dir => path.join(__dirname, '/', dir)
//生产环境去除console.* functions
const dropConsole = () => {
    return config => {
        if (config.optimization.minimizer) {
            config.optimization.minimizer.forEach(minimizer => {
                if (minimizer.constructor.name === 'TerserPlugin') {
                    minimizer.options.terserOptions.compress.drop_console = true
                }
            })
        }
        return config
    }
}
// 打包配置
const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
        // 关闭sourceMap
        config.devtool = false;
        // 配置打包后的文件位置
        console.log('__dirname', __dirname)
        // config.output.path = __dirname + './build';
        // config.output.publicPath = './build';
        // 添加js打包gzip配置
        config.plugins.push(
            new CompressionWebpackPlugin({
                test: /\.js$|\.css$/,
                threshold: 1024,
            }),
        )
    }
    return config;
}

/**
 *
 * @description 解决打包的时候如下报错
 * @url{https://github.com/ant-design/ant-design/issues/15696}
 * https://blog.csdn.net/peade/article/details/84890399
chunk 3 [mini-css-extract-plugin]
Conflicting order between:
 * css ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--6-oneOf-7-3!./node_modules/antd/es/input/style/index.less
 * css ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--6-oneOf-7-3!./node_modules/antd/es/message/style/index.less
 */
const delConflictingOrder = () => {
    return config => {
        for (let i = 0; i < config.plugins.length; i++) {
            const p = config.plugins[i]
            if (!!p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
                const miniCssExtractOptions = { ...p.options, ignoreOrder: true }
                config.plugins[i] = new MiniCssExtractPlugin(miniCssExtractOptions)
                break
            }
        }
    }
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        '@': resolveAlias('src'),
        lib: resolveAlias('src/lib'),
        components: resolveAlias('src/component'),
        images: resolveAlias('src/assets/images'),
        styled: resolveAlias('src/assets/styled'),
        pages: resolveAlias('src/pages'),
        store: resolveAlias('src/store'),
        router: resolveAlias('src/router'),
        locale: resolveAlias('src/locale'),
        // 处理警告  React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
        // 'react-dom': '@hot-loader/react-dom'
        // 解决antd 的icon图标打包体积大
        // '@ant-design/icons': 'purched-antd-icons'
    }),
    adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
        css.options.sourceMap = true;         // css-loader
        postcss.options.sourceMap = true;     // postcss-loader
        // when enable pre-processor,
        // resolve-url-loader will be enabled too
        if (resolve) {
            resolve.options.sourceMap = true;   // resolve-url-loader
        }
        // pre-processor
        if (processor && processor.loader.includes('sass-loader')) {
            processor.options.sourceMap = true; // sass-loader
        }
    }),
    /* 将px转成rem */
    addPostcssPlugins(
        [
            require('postcss-pxtorem')
            ({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })
        ]
    ),
    addCustomize(), // 打包配置
    dropConsole(), // 生产环境去除console
    // 打包编译完成提醒
    addWebpackPlugin(
        new WebpackBuildNotifierPlugin({
            title: '',
            logo: path.resolve('./public/logo.svg'),
            suppressSuccess: true
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash].css',
            chunkFilename: 'static/css/[id].[contenthash].css',
            ignoreOrder: false
            // moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`
        }),
        // 美化控制台
        delConflictingOrder(),
    ),
)