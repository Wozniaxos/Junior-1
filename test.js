const { alphanumericString, stringFormat, longestWords } = require('./index.js')

describe('alpha numeric string', () => {
  test('it sorts properly', () => {
    expect(alphanumericString('a1Ab2Bc3CD4dE5eF6f123456ABCDEFabcdef')).toBe('aabbccddeeffAABBCCDDEEFF224466113355');
  });
});

describe('string format', () => {
  test('it pass arguments properly', () => {
    expect(stringFormat('Hello {0} {1}', 'Mr.', 'X')).toBe('Hello Mr. X');
    expect(stringFormat('{1}_{0}', '{1}', '{0}')).toBe('{0}_{1}');
  });
});

describe('longest words', () => {
  test('find longest words properly', () => {
    expect(longestWords('You are just an old antidisestablishmentarian')).toMatchObject(['antidisestablishmentarian']);
    expect(longestWords('I gave a present to my parents')).toMatchObject(['present', 'parents']);
    expect(longestWords('Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo')).toMatchObject(['Buffalo']);
  });
})