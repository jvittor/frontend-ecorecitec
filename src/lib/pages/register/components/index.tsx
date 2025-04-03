import HeroComponent from './hero';

const Hero = () => {
  return (
    <div className="flex h-[120vh] w-full flex-col items-center justify-center gap-8 bg-[url('/bg-login.png')] bg-cover bg-center text-center">
      <HeroComponent />
    </div>
  );
};

export default Hero;
