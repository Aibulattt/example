const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const terserWbpackPlugin = require('terser-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devServer : {
        port : 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename : 'html/index.html',
            template : 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
        new optimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          }),
          new CopyWebpackPlugin({
              patterns: [
                    { from: './src/img', to:'img' }
              ]
          }),
      ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',  
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, 
                        postcssOptions: {
                            config: path.resolve(__dirname, "./src/js/postcss.config.js"),
                                     },
                    }
                  }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                  },
                ]
              },
          
        ]
    },
};
    
   //   loader: 'MiniCssExtractPlugin.loader',
                    //   options: {
                    //       publicPath: (resourcePath, context) => {
                    //           return path.relative( path.dirname(resourcePath), context) + '/';
                    //       }
                    //   }