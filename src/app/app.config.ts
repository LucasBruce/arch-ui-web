import { provideHttpClient } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from '../environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([MatIconModule]),
    {
      provide: 'custom-icon-registry',
      useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
        const icons = [
          'dark_mode',
          'encrypted_off',
          'encrypted_on',
          'home',
          'light_mode',
          'minimize',
        ];
        icons.forEach((icon) => {
          iconRegistry.addSvgIcon(
            icon,
            sanitizer.bypassSecurityTrustResourceUrl(`/icons/${icon}.svg`),
          );
        });
        return true;
      },
      deps: [MatIconRegistry, DomSanitizer],
    },
    provideServiceWorker('ngsw-worker.js', {
      enabled: environment.enablePwa,
      registrationStrategy: 'registerImmediately',
    }),
  ],
};
