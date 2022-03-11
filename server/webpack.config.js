module.exports = (env) => {
    return require(`./webpack.${env.prod ? 'prod' : 'dev'}.js`)
}