import { TestBed } from '@angular/core/testing';

import { LinguagemService } from './linguagem.service';

describe('LinguagemService', () => {
  let service: LinguagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinguagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
