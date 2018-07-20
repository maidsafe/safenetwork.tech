import React from 'react'
import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/home',
      },
      {
        path: '/how-it-works/',
        component: 'src/containers/how_it_works',
      },
      {
        path: '/faq/',
        component: 'src/containers/faqs',
      },
      {
        path: '/safecoin/',
        component: 'src/containers/safecoins',
      },
      {
        path: '/get-involved/',
        component: 'src/containers/get_involved',
      },
      {
        path: '/timeline/',
        component: 'src/containers/timeline',
      },
      {
        path: '/press-kit/',
        component: 'src/containers/press_kit',
      },
      {
        path: '/cookies/',
        component: 'src/containers/cookies',
      },
      {
        path: '/privacy/',
        component: 'src/containers/privacy',
      },
      {
        path: '/about-maidsafe/',
        component: 'src/containers/about-maidsafe',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    config.plugins.push(new CompressionPlugin({
      algorithm: 'gzip'
    }))
    return config
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" type="image/icon" href="/favicon.ico" />
        <title>SAFE Network</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
