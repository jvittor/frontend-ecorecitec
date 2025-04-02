import HeroComponent from './hero';

const Hero = () => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-8 bg-[#001029] text-center">
      <HeroComponent />
    </div>
  );
};

export default Hero;
