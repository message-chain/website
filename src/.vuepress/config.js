const { description } = require('../../package')

module.exports = {
  title: 'Message Chain',
  description: 'a secure, censorship-free messaging platform',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content:'yes'}],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black'}], 
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Message Chaing'}], 
  ],
  theme:'@vuepress/theme-blog',

  themeConfig: {
    repo: 'https://github.com/message-chain/website',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Factom Protocol',
        link: 'https://www.factomprotocol.org/',
      },
      {
        text: 'Remme',
        link: 'https://remme.io/',
      }
    ],
    feed: {
      canonical_base: 'https://messagechain.app/',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/message-chain',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/message_chain',
        },
      ],
      copyright: [
        /*{
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },*/
        {
          text: 'Copyright © 2020-present Marcus Cuda',
          link: 'https://marcuscuda.com',
        },
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
