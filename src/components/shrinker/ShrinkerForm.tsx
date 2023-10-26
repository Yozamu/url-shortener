'use client';
import { useState } from 'react';

const ShrinkerForm = () => {
  const [inputUrl, setInputUrl] = useState('');

  const handleButtonClick = () => {
    fetch('/api/shorturl', { body: JSON.stringify({ url: inputUrl }), method: 'POST' })
      .then((res) => {
        if (res.status === 200) console.log('OK');
        else console.log('KO');
        return res.json();
      })
      .then((json) => console.log(json));
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
