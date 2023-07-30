import { format, baseOptions } from '../../settings';
import {
  functionDeclarationCode,
  functionExpressionCode,
  arrowFunctionExpressionCode,
  functionCodeContainingOnlyCommentsInBrackets,
} from '../fixtures';
import {
  functionDeclarationCodeResult,
  functionExpressionCodeResult,
  arrowFunctionExpressionCodeResult,
  functionCodeContainingOnlyCommentsInBracketsResult,
} from './expected-results';

const options = {
  ...baseOptions,
  parser: 'babel',
  braceStyle: 'stroustrup',
};

describe('[babel] stroustrup - function statements', () => {
  test('function declaration', () => {
    expect(format(functionDeclarationCode, options)).toBe(functionDeclarationCodeResult);
  });

  test('function expression', () => {
    expect(format(functionExpressionCode, options)).toBe(functionExpressionCodeResult);
  });

  test('arrow function expression', () => {
    expect(format(arrowFunctionExpressionCode, options)).toBe(arrowFunctionExpressionCodeResult);
  });

  test('function (containing only comments in brackets)', () => {
    expect(format(functionCodeContainingOnlyCommentsInBrackets, options)).toBe(
      functionCodeContainingOnlyCommentsInBracketsResult,
    );
  });
});
