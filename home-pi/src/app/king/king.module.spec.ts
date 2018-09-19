import { KingModule } from './king.module';

describe('KingModule', () => {
  let kingModule: KingModule;

  beforeEach(() => {
    kingModule = new KingModule();
  });

  it('should create an instance', () => {
    expect(kingModule).toBeTruthy();
  });
});
