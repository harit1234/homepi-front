import { RoundTableModule } from './round-table.module';

describe('RoundTableModule', () => {
  let roundTableModule: RoundTableModule;

  beforeEach(() => {
    roundTableModule = new RoundTableModule();
  });

  it('should create an instance', () => {
    expect(roundTableModule).toBeTruthy();
  });
});
