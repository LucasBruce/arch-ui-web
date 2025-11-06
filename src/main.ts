import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from './environment.pwa';

bootstrapApplication(App, appConfig)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/ngsw-worker.js')
          .then((reg) => console.log('✅ Service Worker Ativo Localmente => ', reg.scope))
          .catch((err) => console.error('⚠️ Erro ao Registrar Service Worker => ', err));
      });
    }
  })
  .catch((err) => console.error(err));
