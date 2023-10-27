import { getRedirectUrl } from '@/app/api/shorturl/[slug]/route';
import { computeShortUrlAndUpdatedData } from '@/app/api/shorturl/route';

jest.mock('fs');
const fs = require('fs');

describe('app directory routes tests', () => {
  test('retrieves original URL from short URL correctly', () => {
    const shortUrl = 'xQpU';
    const originalUrl = 'My original Url';
    fs.readFileSync.mockReturnValue(JSON.stringify({ urls: { [shortUrl]: originalUrl } }));
    const redirectUrl = getRedirectUrl(shortUrl);
    expect(redirectUrl).toBe(originalUrl);
  });

  test('computes short URL and updated data correctly', () => {
    const data = { currentUrl: 'qKu', urls: {} };
    const originalUrl = 'Some URL';
    const expectedUpdatedData = JSON.stringify({ currentUrl: 'qKv', urls: { qKu: originalUrl } }, null, 2);
    const [shortUrl, updatedData] = computeShortUrlAndUpdatedData(JSON.stringify(data), originalUrl);
    expect(shortUrl).toBe('qKu');
    expect(updatedData).toBe(expectedUpdatedData);
  });
});
