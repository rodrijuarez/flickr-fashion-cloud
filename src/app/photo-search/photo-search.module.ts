import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoSearchComponent } from './photo-search.component';
import { PhotoSearchRoutes } from './photo-search.routing';

@NgModule({
  imports: [CommonModule, PhotoSearchRoutes],
  declarations: [PhotoSearchComponent]
})
export class PhotoSearchModule {}
