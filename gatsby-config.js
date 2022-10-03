require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Web development portfolio for James Plummer`,
    author: `J.Plummer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i5dp9so7fldd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        data: `@import "./src/styles/config";`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variable: true,
            weights: [`300..900`],
          },
        ],
        display: "swap",
      },
    },
  ],
}
