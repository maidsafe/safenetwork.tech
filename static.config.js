import React from 'react'

const pageDirPath = 'src/pages'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: `${pageDirPath}/Home`,
      },
      {
        path: '/how-it-works/',
        template: `${pageDirPath}/HowItWorks`,
      },
      {
        path: '/faq/',
        template: `${pageDirPath}/FAQs`,
      },
      {
        path: '/safecoin/',
        template: `${pageDirPath}/SafeCoin`,
      },
      {
        path: '/get-involved/',
        template: `${pageDirPath}/GetInvolved`,
      },
      {
        path: '/roadmap/',
        template: `${pageDirPath}/Roadmap`,
      },
      {
        path: '/press-kit/',
        template: `${pageDirPath}/PressKit`,
      },
      {
        path: '/cookies/',
        template: `${pageDirPath}/Cookies`,
      },
      {
        path: '/privacy/',
        template: `${pageDirPath}/Privacy`,
      },
      {
        path: '/about-maidsafe/',
        template: `${pageDirPath}/About`,
      },
      {
        path: '/fundamentals/',
        template: `${pageDirPath}/Fundamentals`,
      },
      {
        path: '404',
        template: `${pageDirPath}/NotFound`,
      },
    ]
  },
  plugins: ['react-static-plugin-react-router', 'react-static-plugin-sass', 'ie11-polyfills-plugin'],
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#444444" />
        <link rel="shortcut icon" type="image/icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>SAFE Network</title>
      </Head>
      <Body className="no-js">{children}</Body>
    </Html>
  ),
  babelExcludes: [/core-js/]
}
