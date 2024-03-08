import { buildConfig } from './build-config.js'
import { metadata } from './metadata.js'
import { actions } from './actions.js'

const buildEnv = {
  assetUrl: '/assets/',
  baseUrl: '',
}

const serveEnv = {
  assetUrl: '/assets/',
  baseUrl: '',
}

export const globals = {
  actions,
  imageSizes: buildConfig.imageSizes,
  metadata,
  ...(process.env.MODE === 'build' ? buildEnv : {}),
  ...(process.env.MODE === 'serve' ? serveEnv : {}),
}
