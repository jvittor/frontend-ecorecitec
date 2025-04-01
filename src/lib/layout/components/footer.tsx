export const Footer = () => {
  return (
    <footer className="wrapper">
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
