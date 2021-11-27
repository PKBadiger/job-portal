module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [],
  target: 'web',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
  },
});
