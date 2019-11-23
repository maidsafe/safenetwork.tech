export default pluginOptions => ({
  webpack: (config, { stage }) => {
    if (stage === 'prod' || stage === 'dev') {
      if (typeof config.entry === 'string') {
        config.entry = ['core-js/stable', config.entry]
      }
      else {
        config.entry = ['core-js/stable', ...config.entry]
      }
    }
    return config
  }
})
