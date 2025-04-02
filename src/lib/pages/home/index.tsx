import Hero from '@/lib/pages/home/components/hero/index';
import About from '@/lib/pages/home/components/about/index';
import WasteManagement from '@/lib/pages/home/components/waste-management/index';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WasteManagement />
    </div>
  );
};

export default Home;
