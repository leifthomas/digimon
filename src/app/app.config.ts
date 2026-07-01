import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { reducers, metaReducers } from './state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideEffects(),
        provideHttpClient(),
        provideRouter(routes),
        provideStore(reducers, { metaReducers }),
    ],
};
