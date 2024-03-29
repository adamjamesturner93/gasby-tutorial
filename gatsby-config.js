/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: "Gatsby Tutorial",
        description: "Some description",
        author: "@adamjamesturner93",
        data: ["item 1", "item 2"],
        person: { name: "Adam", age: 26 },
    },
    /* Your site config here */
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "s9yh04hydes7",
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ],
}
