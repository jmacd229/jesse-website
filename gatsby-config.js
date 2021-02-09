const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Jesse MacDougall`,
        author: 'Jesse MacDougall',
        description: `Jesse MacDougall is a full-stack web developer based in Toronto, Ontario.
        He commonly works in JavaScript frameworks and also provides occasional freelance web development work.`,
        lang: 'en'
    },
    plugins: ["gatsby-plugin-sass",
        {
            resolve: 'gatsby-plugin-webfonts',
            options: {
                fonts: {
                    google: [{
                            family: 'Raleway',
                            variants: [
                                '400',
                                '400i',
                                '700',
                                '700i',
                                '900'
                            ],
                        },
                        {
                            family: 'Kadwa',
                            variants: [700]
                        }
                    ]
                }
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                develop: false,
            }
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
                '@pages': path.join(__dirname, 'src/components/pages'),
                '@shared': path.join(__dirname, 'src/components/shared'),
                'animations': path.join(__dirname, 'src/animations'),
                'enums': path.join(__dirname, 'src/enums'),
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-G1EXN1KN2T", "GTM-N5CSTZ6"],
            }
        },
    ],
}