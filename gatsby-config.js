/**
 * @type {import('gatsby').GatsbyConfig}
 **/

module.exports = {
  pathPrefix: "/inumakirulet",
  siteMetadata: {
    title: `狗巻棘確率機`,
    author: `@riotamoriya`,
    siteUrl: `https://riotamoriya.github.io/inumakirulet/`,
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `狗巻棘確率機`,
        short_name: `狗巻棘確率機`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2e2f41`,
        display: `standalone`,
        icon: `./favicon.jpg`, // このパスにはあなたのファビコンの画像へのパスを指定します。
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_voices`,
        path: `${__dirname}/static/character-set/inumaki/voices/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inumaki_illusts`,
        path: `${__dirname}/static/character-set/inumaki/illusts/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    
  ],
};

