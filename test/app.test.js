import { expect, test } from '@playwright/test'

test('visit page and take screenshot', async ({ page }) => {
   // If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
   // Otherwise, we use the Production URL.
   // const targetUrl = 'https://robo-tec.vercel.app'
   const targetUrl = 'http://localhost:8080'
   // We visit the page. This waits for the "load" event by default.
   const response = await page.goto(targetUrl)
   // Test that the response did not fail
   expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
   // Take a screenshot
   await page.screenshot({ path: './test-results/screenshot.jpg' })
})


