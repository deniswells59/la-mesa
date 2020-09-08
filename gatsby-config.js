const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
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
  ],
};
