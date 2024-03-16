import packageJson from '../../package.json'

const version = packageJson.devDependencies['@jaccomeijer/green-lib']

export const metadata = {
  branding: {
    copyright: 'Copyright © 2024 Jacco Meijer',
    description: 'Cyber Security Professional.',
    heading: 'Jacco Meijer',
    url: '/',
  },
  vendor: {
    heading: 'Made with Green UI Library',
    icon: 'book-open',
    url: 'https://jaccomeijer.github.io/green-reference/',
    version,
  },
  content: {
    generator: 'esbuild',
    language: 'en',
  },
}
