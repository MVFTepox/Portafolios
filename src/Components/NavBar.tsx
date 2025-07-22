import { scrollById } from "@/Lib";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollById(id);
    setOpen(false); // Cierra el menú al dar clic en una sección
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Navbar en escritorio */}
      <div className="hidden md:flex justify-center">
        <nav className="navbar shadow-sm justify-center text-white backdrop-blur-lg md:w-1/2 lg:w-1/2 rounded-full absolute top-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => handleClick("home")}>Inicio</button>
            </li>
            <li>
              <button onClick={() => handleClick("skills")}>Sobre mí</button>
            </li>
            <li>
              <button onClick={() => handleClick("projects")}>Proyectos</button>
            </li>
            <li>
              <button onClick={() => handleClick("contact")}>Contacto</button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navbar en móviles */}
      <div className="md:hidden">
        <div className="absolute top-0 left-0 w-full navbar bg-[#00000080] backdrop-blur-md text-white">
          <div className="flex-1 px-4 text-white font-semibold text-lg">
            Mi portafolio
          </div>
          <button
            className="btn btn-ghost btn-square text-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {open && (
          <div className="absolute top-16 left-0  menu bg-[#00000080] text-white w-full px-4 py-4 space-y-4 ">
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleClick("home")}>Inicio</button>
              </li>
              <li>
                <button onClick={() => handleClick("skills")}>Sobre mí</button>
              </li>
              <li>
                <button onClick={() => handleClick("projects")}>
                  Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("contact")}>Contacto</button>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex flex-col items-center mt-6 space-y-3">
              <p className="text-sm font-semibold text-white">Redes sociales</p>
              <div className="bg-[#ffffff80] flex items-center justify-center px-4 py-2 space-x-4 rounded-full backdrop-blur-md shadow-md">
                <a
                  href="https://www.facebook.com/Tepoxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mario-valentin-fraire-tepox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://github.com/MVFTepox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
