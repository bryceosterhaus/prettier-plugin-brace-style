import { format, baseOptions } from '../../settings';
import {
  ifCode,
  ifElseCode,
  ifElseifElseCode,
  ifElseCodeWithComment,
  ifCodeContainingOnlyCommentsInBrackets,
} from '../fixtures';
import {
  ifCodeResult,
  ifElseCodeResult,
  ifElseifElseCodeResult,
  ifElseCodeWithCommentResult,
  ifCodeContainingOnlyCommentsInBracketsResult,
} from './expected-results';

const options = {
  ...baseOptions,
  parser: 'babel',
  braceStyle: 'allman',
};

describe('[babel] allman - if statements', () => {
  test('if', () => {
    expect(format(ifCode, options)).toBe(ifCodeResult);
  });

  test('if...else', () => {
    expect(format(ifElseCode, options)).toBe(ifElseCodeResult);
  });

  test('if...elseif...else', () => {
    expect(format(ifElseifElseCode, options)).toBe(ifElseifElseCodeResult);
  });

  test('if...else (with comment)', () => {
    expect(format(ifElseCodeWithComment, options)).toBe(ifElseCodeWithCommentResult);
  });

  test('if (containing only comments in brackets)', () => {
    expect(format(ifCodeContainingOnlyCommentsInBrackets, options)).toBe(
      ifCodeContainingOnlyCommentsInBracketsResult,
    );
  });
});
