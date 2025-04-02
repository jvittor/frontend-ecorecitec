export const Footer = () => {
  return (
    <footer className="wrapper flex min-h-[40vh] items-center justify-center">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a href="jvittor" target="_blank" rel="noopener noreferrer">
            jvittor
          </a>
        </p>
      </div>
    </footer>
  );
};
