import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        className="rounded-lg"
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        priority
      />
    </div>
  );
};

export default Logo;
