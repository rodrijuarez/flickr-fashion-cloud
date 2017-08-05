import { TestBed, async } from '@angular/core/testing';

import { PhotoSearchComponent } from './photo-search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PhotoSearchComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoSearchComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    })
  );

  it(
    'should create the component',
    async(() => {
      const fixture = TestBed.createComponent(PhotoSearchComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    })
  );
});
