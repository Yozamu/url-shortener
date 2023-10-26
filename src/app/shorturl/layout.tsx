import Navbar from '@/components/basics/Navbar';

const ShorturlLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ShorturlLayout;
