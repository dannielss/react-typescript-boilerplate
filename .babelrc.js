const plugins = [
  'react-hot-loader/babel',
  '@babel/plugin-proposal-class-properties'
]

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins
}
