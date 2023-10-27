export default (() => {
  const getNextChar = (charCode: number) => {
    switch (charCode) {
      case 90:
        return 97; // Z => a
      case 122:
        return 48; // z => 0
      case 57:
        return 0; // 9: end of sequence
      default:
        return charCode + 1;
    }
  };

  const getNextShortenedUrl = (currentUrl: string) => {
    const newUrl = currentUrl.split('');
    for (let i = newUrl.length - 1; i >= 0; i--) {
      const charCode = newUrl[i].charCodeAt(0);
      const newCharCode = getNextChar(charCode);
      if (newCharCode === 0) {
        newUrl[i] = 'A';
      } else {
        newUrl[i] = String.fromCharCode(newCharCode);
        return newUrl.join('');
      }
    }
    newUrl.push('A');
    return newUrl.join('');
  };

  const isUrlValid = (url: string) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url);

  return {
    getNextShortenedUrl,
    isUrlValid,
  };
})();
