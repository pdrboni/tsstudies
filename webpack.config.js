const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/A19-type-exercicio-resolucao-professor/A19-type-exercicio-resolucao-professor.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              configFile: 'tsconfig.frontend.json'
            }
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
    },

    devtool: 'source-map',
};
