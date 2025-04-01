import { SomeText } from './components/some-text';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-8 text-center">
      <SomeText />
    </div>
  );
};

export default Home;
