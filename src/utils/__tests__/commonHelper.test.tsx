import commonHelper from '../commonHelper';

describe('commonHelper tests', () => {
  describe('getNextShortenedUrl tests', () => {
    test('returns start of sequence if empty string provided', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('');
      expect(nextUrl).toBe('A');
    });

    test('returns following character in sequence', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('E');
      expect(nextUrl).toBe('F');
    });

    test('returns lowercase character after end of uppercase characters', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('Z');
      expect(nextUrl).toBe('a');
    });

    test('returns number after end of lowercase characters', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('z');
      expect(nextUrl).toBe('0');
    });

    test('returns url with an additional character when reached end of sequence', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('9');
      expect(nextUrl).toBe('AA');
    });

    test('adds new character at end of sequence with multiple characters', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('9999');
      expect(nextUrl).toBe('AAAAA');
    });

    test('updates last character of sequence when it has multiple characters', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('aKi7f');
      expect(nextUrl).toBe('aKi7g');
    });

    test('updates correctly the whole sequence when reaching the end', () => {
      const nextUrl = commonHelper.getNextShortenedUrl('dR999');
      expect(nextUrl).toBe('dSAAA');
    });
  });

  describe('isUrlValid tests', () => {
    test('returns false if url is empty', () => {
      const isUrlValid = commonHelper.isUrlValid('');
      expect(isUrlValid).toBe(false);
    });

    test('returns false if url is a random string', () => {
      const isUrlValid = commonHelper.isUrlValid('Some string');
      expect(isUrlValid).toBe(false);
    });

    test('returns false if does not have a TLD', () => {
      const isUrlValid = commonHelper.isUrlValid('www.google');
      expect(isUrlValid).toBe(false);
    });

    test('returns false if url lacks the http prefix', () => {
      const isUrlValid = commonHelper.isUrlValid('www.google.fr');
      expect(isUrlValid).toBe(false);
    });

    test('returns false if url is only missing TLD', () => {
      const isUrlValid = commonHelper.isUrlValid('http://google');
      expect(isUrlValid).toBe(false);
    });

    test('returns true if the URL is complete and well formed', () => {
      const isUrlValid = commonHelper.isUrlValid('http://google.fr');
      expect(isUrlValid).toBe(true);
    });
  });
});
