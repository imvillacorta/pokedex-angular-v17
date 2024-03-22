import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'details/:id',
        loadComponent: () => import('./details/details.component')
    }
];