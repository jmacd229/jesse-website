module.exports = {
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
        }
    ],
}