const path = require('path');

module.exports = {
  pathPrefix: '/la-mesa',
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          config: path.resolve(__dirname, 'src/config'),
          providers: path.resolve(__dirname, 'src/providers'),
          theme: path.resolve(__dirname, 'src/theme'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`, `Yanone Kaffeesatz`],
        display: 'swap',
      },
    },
    'gatsby-theme-gallery',
  ],
};
