/* eslint-env node */
module.exports = {
  siteMetadata: {
    title: 'Drew Grubb',
    description:
      'Drew Grubb is an experienced software engineer focused on designing and developing amazing end to end applications for the new age.',
    siteUrl: 'https://drewgrubb.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    ////gatsby-plugin-manifest && gatsby-plugin-offline when there is an icon
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-ZMC863V79N'],
        pluginConfig: {
          head: true,
          respectDNT: true, // :)
        },
      },
    },
  ],
};
