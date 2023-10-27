'use client';
import { useShrinkerStore } from '@/store/shrinker';

const ShrinkerMessage = () => {
  const { message, shortUrl } = useShrinkerStore();

  if (!message.content) return null;

  const url = new URL(window.location.href);
  const displayedUrl = `${url.origin}/${shortUrl}`;

  const messageColors =
    message.status === 'success' ? 'bg-success-background text-success-text' : 'bg-error-background text-error-text';

  return (
    <div data-testid="message-container" className={`w-full flex rounded-sm px-4 py-2 gap-2 ${messageColors}`}>
      <div data-testid="message-content">{message.content}</div>
      {shortUrl && (
        <a className="underline" href={`/${shortUrl}`}>
          {displayedUrl}
        </a>
      )}
    </div>
  );
};

export default ShrinkerMessage;
