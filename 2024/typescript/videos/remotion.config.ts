import { Config } from '@remotion/cli/config'
import { enableTailwind } from '@remotion/tailwind'

// See all configuration options: https://remotion.dev/docs/config

Config.setVideoImageFormat('jpeg')
Config.setOverwriteOutput(true)
Config.overrideWebpackConfig(enableTailwind)
Config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules ?? []),
        {
          test: /\.txt$/,
          use: 'raw-loader',
        },
      ],
    },
  }
})
