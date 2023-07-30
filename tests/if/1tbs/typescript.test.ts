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
  parser: 'typescript',
  braceStyle: '1tbs',
};

describe('[typescript] 1tbs - if statements', () => {
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
