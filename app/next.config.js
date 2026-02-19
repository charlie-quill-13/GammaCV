const pkg = require('../package.json');

module.exports = {
  output: 'export',
  env: {
    LIB_VERSION: pkg.version,
  },
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
    );

    return config;
  },
};
