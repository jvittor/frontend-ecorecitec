import Hero from '@/lib/pages/home/components/hero/index';
import About from '@/lib/pages/home/components/about/index';
import WasteManagement from '@/lib/pages/home/components/waste-management/index';
import CircleSystem from '@/lib/pages/home/components/circle-system/index';
import Challenge from '@/lib/pages/home/components/challenge/index';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WasteManagement />
      <CircleSystem />
      <Challenge />
    </div>
  );
};

export default Home;
