module.exports = {
    siteMetadata: {
        title: `Jesse MacDougall`,
        author: 'Jesse MacDougall',
        description: `This website is to serve as a portfolio website for Jesse MacDougall, a full-stack software developer.
        Its purpose is to provide the same information the could be found on a resume, while also displaying an ability to develop on the web.`,
        lang: 'en'
    },
    plugins: ["gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                develop: true,
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
                description: `This website is to serve as a portfolio website for Jesse MacDougall, a full-stack software developer.
                Its purpose is to provide the same information the could be found on a resume, while also displaying an ability to develop on the web.`,
                short_name: `Jesse`,
                start_url: `/`,
                background_color: `#1f1f1f`,
                theme_color: `#00BCBD`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`,
            },
        },
    ],
}