/**
 * @type {import('gatsby').GatsbyConfig}
 **/


module.exports = {
  pathPrefix: "/tokidokionigiri",
  siteMetadata: {
    title: `狗巻棘確率機`,
    author: `@riotamoriya`,
    siteUrl: `https://riotamoriya.github.io/tokidokionigiri/`,
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
        icon: `src/images/inumaki.jpg`, // このパスにはあなたのファビコンの画像へのパスを指定します。
      },
    },
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

