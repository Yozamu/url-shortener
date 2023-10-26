const ShrinkerMessage = () => {
  const message = { status: 'error', content: 'URL invalide' }; // TODO replace by actual message
  const messageColors =
    message.status === 'success' ? 'bg-success-background text-success-text' : 'bg-error-background text-error-text';

  return <div className={`w-full flex rounded-sm px-4 py-2 ${messageColors}`}>Message</div>;
};

export default ShrinkerMessage;
