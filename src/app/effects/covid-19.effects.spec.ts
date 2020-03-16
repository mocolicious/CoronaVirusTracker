import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Covid19Effects } from './covid-19.effects';

describe('Covid19Effects', () => {
  let actions$: Observable<any>;
  let effects: Covid19Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Covid19Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<Covid19Effects>(Covid19Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
