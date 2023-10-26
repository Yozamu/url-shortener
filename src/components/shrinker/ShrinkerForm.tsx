'use client';
import { useState } from 'react';

const ShrinkerForm = () => {
  const [inputUrl, setInputUrl] = useState('');

  const handleButtonClick = () => {
    // TODO handle click
    alert(inputUrl);
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
