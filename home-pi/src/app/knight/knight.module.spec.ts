import { KnightModule } from './knight.module';

describe('KnightModule', () => {
  let knightModule: KnightModule;

  beforeEach(() => {
    knightModule = new KnightModule();
  });

  it('should create an instance', () => {
    expect(knightModule).toBeTruthy();
  });
});
