import { RouterModule, Routes } from '@angular/router';

import { PhotoSearchComponent } from './photo-search.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoSearchComponent
  }
];

export const PhotoSearchRoutes = RouterModule.forChild(routes);
