import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; 

import { routes } from './app.routes';
import { provideZard } from '@/shared/core/provider/providezard';

import { cookieInterceptor } from './shared/interceptors/cookie.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideZard(),
    provideHttpClient(
      withInterceptors([cookieInterceptor])
    )
  ]
};