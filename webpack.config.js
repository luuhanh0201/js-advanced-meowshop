const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js', // Điểm vào của ứng dụng (JavaScript)
    output: {
      filename: 'bundle.js', // Tên tệp đã xây dựng
      path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra cho các tệp đã xây dựng
    },
    mode: 'production', // Chế độ sản phẩm
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html', // Đường dẫn tới tệp HTML mẫu
      }),
    ],
  };