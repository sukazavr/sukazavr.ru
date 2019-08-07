const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const buildFolder = '../build'
const rootPath = path.resolve(__dirname, '..')
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json')

module.exports = (phase, { defaultConfig }) => {
	return {
		distDir: buildFolder,
		pageExtensions: ['tsx', 'ts'],
		poweredByHeader: false,
		webpack(config, options) {
			const { dir, dev, isServer } = options

			config.plugins = config.plugins.filter(
				(plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
			)

			if (dev && isServer) {
				config.plugins.push(
					new ForkTsCheckerWebpackPlugin({
						tsconfig: tsconfigPath,
						checkSyntacticErrors: true,
						eslint: true,
						watch: [dir],
					})
				)
			}

			return config
		},
	}
}
