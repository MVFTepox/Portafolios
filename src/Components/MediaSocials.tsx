export const MediaSocials = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-4 bg-white pl-8 p-4 rounded-r-4xl">
        <a
          href="https://www.facebook.com/Tepoxi"
          target="_blank"
          rel="Perfin de Facebook"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            alt="Facebook"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mario-valentin-fraire-tepox/"
          target="_blank"
          rel="Perfin de LinkedIn"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>

        <a href="https://github.com/MVFTepox" target="_blank" rel="github">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};
