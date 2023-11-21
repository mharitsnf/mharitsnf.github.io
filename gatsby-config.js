/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Harits Nur Fauzan`,
    description: `Portfolio`,
    twitterUsername: `@mharitsnf`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `project`,
        path: `${__dirname}/project`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Plus Jakarta Sans`,
            file: `https://fonts.googleapis.com/css?family=Plus Jakarta Sans`,
          },
        ],
      },
    },
  ],
}
