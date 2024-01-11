import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 20,
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
})
