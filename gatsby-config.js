const path = require('path');

module.exports = {
  pathPrefix: '/la-mesa',
  siteMetadata: {
    title: `La Mesa Stockton Restuarant`,
    siteUrl: `http://www.lamesastockton.com`,
    description: `La Mesa presents a rich heritage of elevated Mexican cuisine in a welcoming ambiance. Join us for craft cocktails, beer and wines.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
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
