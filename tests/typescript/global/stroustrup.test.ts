import type { Fixture } from '../../settings';
import { format, baseOptions } from '../../settings';

const options = {
  ...baseOptions,
  parser: 'typescript',
  braceStyle: 'stroustrup',
};

const fixtures: Fixture[] = [
  {
    name: 'global augmentation',
    input: `
declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}
`,
    output: `declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}
`,
  },
];

describe('typescript/global/stroustrup', () => {
  for (const fixture of fixtures) {
    test(fixture.name, () => {
      expect(format(fixture.input, options)).toBe(fixture.output);
    });
  }
});