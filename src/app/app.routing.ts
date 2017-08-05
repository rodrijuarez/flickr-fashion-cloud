import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './photo-search/photo-search.module#PhotoSearchModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
