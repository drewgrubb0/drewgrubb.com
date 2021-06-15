/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@icons': path.resolve(__dirname, 'src/components/shared/icons'),
      },
    },
  });
};
