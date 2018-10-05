require('dotenv').config();
const webpack = require('webpack');
// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');
// Makes a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');
const { EnvironmentPlugin, DefinePlugin } = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'})
}

module.exports = (env) => {
  const isProduction = env === 'production';

  return {

    entry: `${__dirname}/src/main.js`,

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    // Stick it into the "path" folder with that file name
    output: {
      filename: 'bundle.[hash].js',
      path: `${__dirname}/build`,
    },

    module: {
      rules: [
        // If it's a .js file not in node_modules, use the babel-loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // If it's a .scss file
        {
          test: /\.scss$/,
          loader: ExtractPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              'resolve-url-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [`${__dirname}/src/style`],
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'font/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
          exclude: /\.glyph.svg/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 6000,
                name: 'image/[name].[ext]',
              },
            },
          ],
        },

      ],
    },
    plugins: [
      new HTMLPlugin({
        template: `${__dirname}/src/index.html`,
      }),
      new ExtractPlugin('bundle.[hash].css'),
      new EnvironmentPlugin(['NODE_ENV']),
      new DefinePlugin({
        __AUTH_URL__: JSON.stringify(process.env.AUTH_URL),
        __API_URL__: JSON.stringify(process.env.API_URL),
        __DEBUG__: JSON.stringify(!process.NODE_ENV),
      }),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.VIZ_SPREADSHEET_ID': JSON.stringify(process.env.VIZ_SPREADSHEET_ID),
        'process.env.TASKS_SPREADSHEET_ID': JSON.stringify(process.env.TASKS_SPREADSHEET_ID),
        'process.env.GOOGLE_SHEETS_API_KEY': JSON.stringify(process.env.GOOGLE_SHEETS_API_KEY),
        'process.env.TASKS_SHEETS_API_KEY': JSON.stringify(process.env.TASKS_SHEETS_API_KEY),

        'process.env.FIREBASE_PRIVATE_KEY': JSON.stringify(process.env.FIREBASE_PRIVATE_KEY),
        'process.env.FIREBASE_CLIENT_EMAIL': JSON.stringify(process.env.FIREBASE_CLIENT_EMAIL),
        'process.env.FIREBASE_ADMIN_PROJECT_ID': JSON.stringify(process.env.FIREBASE_ADMIN_PROJECT_ID),
      })
    ],
    devServer: {
      historyApiFallback: true,
    },
  }
};