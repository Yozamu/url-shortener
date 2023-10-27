import commonHelper from '../commonHelper';

describe('commonHelper tests', () => {
  describe('getNextShortenedUrl tests', () => {
    test('do sth', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('');
      expect(nextUrl).toBe('A');
    });
  });

  describe('isUrlValid tests', () => {
    test('do sth', () => {
      const isUrlValid = commonHelper.isUrlValid('');
      expect(isUrlValid).toBe(false);
    });
  });
});
