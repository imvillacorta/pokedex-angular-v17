import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'details',
        loadComponent: () => import('./details/details.component')
    }
];