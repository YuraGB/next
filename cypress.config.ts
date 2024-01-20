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
    setupNodeEvents(on) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
          // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

          // for example, to set `somePreference: true` in Preferences:
          launchOptions.preferences.default.intl = { accept_languages: 'en' }

          return launchOptions
        }

        if (browser.family === 'firefox') {
          // launchOptions.preferences is a map of preference names to values
          launchOptions.preferences.default.intl = { accept_languages: 'en' }

          return launchOptions
        }

        // if (browser.name === 'electron') {
        //   // launchOptions.preferences is a `BrowserWindow` `options` object
        //   launchOptions.preferences.default.intl = { accept_languages: 'en' }
        //
        //   return launchOptions
        // }
      })
    },
  },
})
