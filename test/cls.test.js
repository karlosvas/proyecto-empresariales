import { test, expect } from '@playwright/test';

test('CLS test', async ({ page }) => {
   const targetUrl = 'http://localhost:8085';
   await page.goto(targetUrl);

   // Espera a que la página se cargue completamente
   await page.waitForLoadState('load');

   // Obtiene las métricas de rendimiento
   const performanceTiming = JSON.parse(
      await page.evaluate(() => JSON.stringify(window.performance.timing))
   );

   // Obtiene el CLS
   const cls = performanceTiming.domInteractive - performanceTiming.navigationStart;

   // Comprueba que el CLS esté por debajo del objetivo
   expect(cls, 'should have low CLS').toBeLessThan(0.1);
});