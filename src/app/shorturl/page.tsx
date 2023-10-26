import ShrinkerForm from '@/components/shrinker/ShrinkerForm';
import ShrinkerMessage from '@/components/shrinker/ShrinkerMessage';

const ShorturlPage = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-16">
      <h1 className="text-4xl text-white">URRL</h1>
      <ShrinkerForm />
      <hr className="border-t-2 w-full border-slate-500" />
      <ShrinkerMessage />
    </main>
  );
};

export default ShorturlPage;
