/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Jesse MacDougall`,
    author: 'Jesse MacDougall',
    description: `Jesse MacDougall is a full-stack web developer based in Toronto, Ontario.
        He commonly works in JavaScript frameworks and also provides occasional freelance web development work.`,
    lang: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Raleway',
              variants: ['400', '400i', '700', '700i', '900'],
            },
            {
              family: 'Kadwa',
              variants: [700],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: 'en',
        name: `Jesse MacDougall`,
        description: `Jesse MacDougall is a full-stack web developer based in Toronto, Ontario.
                He commonly works in JavaScript frameworks and also provides occasional freelance web development work.`,
        short_name: `Jesse`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#00BCBD`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@misc': path.join(__dirname, 'src/components/misc'),
        '@shared': path.join(__dirname, 'src/components/shared'),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-G1EXN1KN2T', 'GTM-N5CSTZ6'],
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
};
