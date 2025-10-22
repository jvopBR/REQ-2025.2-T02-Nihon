import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    // Updated reporter configuration for HTML reports
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: true,
      html: true,  // Changed to true to generate HTML
      json: true,  // Keep JSON for merging multiple test files
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: 'cypress/reports/videos',
  screenshotsFolder: 'cypress/reports/screenshots',
})
