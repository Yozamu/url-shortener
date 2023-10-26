import ShrinkerForm from '@/components/shrinker/ShrinkerForm';

const ShorturlPage = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-16">
      <h1 className="text-4xl text-white">URRL</h1>
      <ShrinkerForm />
      <hr className="border-t-2 w-full border-slate-500" />
      <div>RES MSG</div>
    </main>
  );
};

export default ShorturlPage;
