module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/radar-map/'
    : '/',

  transpileDependencies: [
    'vuetify'
  ]
}
