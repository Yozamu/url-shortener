'use client';
import { useShrinkerStore } from '@/store/shrinker';
import { useState } from 'react';

const ShrinkerForm = () => {
  const [inputUrl, setInputUrl] = useState('');
  const { setMessage, setShortUrl } = useShrinkerStore();

  const handleButtonClick = () => {
    fetch('/api/shorturl', { body: JSON.stringify({ url: inputUrl }), method: 'POST' })
      .then((res) => {
        if (res.status === 400) setMessage('error', "L'URL saisie est invalide");
        return res.json();
      })
      .then((json) => {
        if (json.shortUrl) {
          setShortUrl(json.shortUrl);
          setMessage('success', 'Votre lien raccourci : ');
        }
      });
  };

  return (
    <div className="w-full flex gap-4">
      <input className="grow rounded px-2" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
      <button
        className="px-12 py-1 rounded font-semibold bg-primary-main hover:bg-primary-light"
        onClick={handleButtonClick}
      >
        Raccourcir
      </button>
    </div>
  );
};

export default ShrinkerForm;
