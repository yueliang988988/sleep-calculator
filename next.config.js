/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [], rehypePlugins: [] },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
})
