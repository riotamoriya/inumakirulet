/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/tokidokionigiri",
  siteMetadata: {
    title: `tokidokionigiri`,
    siteUrl: `https://riotamoriya.github.io/tokidokionigiri`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `musics`,
        path: `${__dirname}/src/musics/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

