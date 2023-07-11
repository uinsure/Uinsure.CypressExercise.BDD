import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 25000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://quotes.test.uinsure.co.uk/',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    excludeSpecPattern: ['*.js', '*.ts', '*.md'],
  },
})
