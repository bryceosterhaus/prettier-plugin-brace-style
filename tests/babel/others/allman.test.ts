import { format, baseOptions } from '../../settings';

const options = {
  ...baseOptions,
  parser: 'babel',
  braceStyle: 'allman',
};

describe('babel/others/allman', () => {
  test('tabWidth: 4', () => {
    const input = `\nif (foo) {\n  bar();\n}\nelse {\n  baz();\n}\n`;
    const output = `if (foo)\n{\n    bar();\n}\nelse\n{\n    baz();\n}\n`;

    expect(format(input, { ...options, tabWidth: 4 })).toBe(output);
  });

  test('useTabs: true', () => {
    const input = `\nif (foo) {\n  bar();\n}\nelse {\n  baz();\n}\n`;
    const output = `if (foo)\n{\n\tbar();\n}\nelse\n{\n\tbaz();\n}\n`;

    expect(format(input, { ...options, useTabs: true })).toBe(output);
  });

  test('endOfLine: crlf', () => {
    const input = `\nif (foo) {\n  bar();\n}\nelse {\n  baz();\n}\n`;
    const output = `if (foo)\r\n{\r\n  bar();\r\n}\r\nelse\r\n{\r\n  baz();\r\n}\r\n`;

    expect(format(input, { ...options, endOfLine: 'crlf' })).toBe(output);
  });
});