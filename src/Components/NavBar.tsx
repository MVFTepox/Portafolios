
import { scrollById } from "@/Lib";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:block sticky top-0 z-50">
        <div className="navbar shadow-sm justify-center text-white backdrop-blur-lg md:w-1/2 lg:w-1/2 rounded-full absolute  md:inset-x-1/4 lg:inset-x-1/4 top-2 ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <button onClick={() => scrollById("home")}>Inicio</button>
            </li>
            <li>
              <button onClick={() => scrollById("skills")}>Sombre mi</button>
  
            </li>
            <li>
              <button onClick={() => scrollById("projects")}>Proyectos</button>
            </li>
            <li>
              <button onClick={() => scrollById("contact")}>Contacto</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2">Navbar Title</div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <button onClick={() => scrollById("home")}>Inicio</button>
                  </li>
                  <li>
                    <button onClick={() => scrollById("skills")}>Sombre mi</button>
                  </li>
                  <li>
                    <button onClick={() => scrollById("projects")}>Proyectos</button>
                  </li>
                  <li>
                    <button onClick={() => scrollById("contact")}>Contacto</button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
