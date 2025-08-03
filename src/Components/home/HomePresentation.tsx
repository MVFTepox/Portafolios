import { BtnDecorationWithoutFuntion } from "@/Components/";
import { scrollById } from "@/Lib";

export const HomePresentation = () => {
  // función para descargar un archivo que esté en la carpeta public
  function downloadFile(filename: string) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename;
    link.click();
  }

  return (
    <div className="container mx-auto pt-20 px-4 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        <img
          className="rounded-full border-2 border-white w-40 sm:w-48 md:w-56 lg:w-64 z-10"
          src="/FotoVale.jpg"
          alt="Foto-De-Valentin"
        />
        <div className="backdrop-blur-3xl p-6 sm:p-8 md:p-10 border bg-white/5 border-white/20 rounded-2xl shadow-black shadow-sm max-w-md md:max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl mb-4 font-stretch-ultra-expanded">
            Desarrollador FullStack Jr.
          </h1>
          <p className="text-base sm:text-lg text-gray-200">
            Hola soy <span className="text-xl font-semibold">Mario Valentín Fraire Tépox </span>
            Desarrollador FullStack Jr., especializado en crear soluciones innovadoras, creativas y escalables para mejorar la experiencia de
            los usuarios en línea.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-6">
            <div className="flex items-center justify-center md:justify-start mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <span className="ml-2">Torreon, Coahuila, México</span>
            </div>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check text-green-500" viewBox="0 0 16 16">
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span className="ml-2">Disponible</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-6">
            <BtnDecorationWithoutFuntion
              className="btn bg-[#1da1f2] border-0 hover:bg-[#c7caea] active:bg-amber-50 text-white px-6 py-2 rounded"
              text="Contáctame"
              onClick={() => scrollById("contact")}
            />
            <BtnDecorationWithoutFuntion
              className="btn hover:shadow-lg shadow-blue-500 text-black px-6 py-2 rounded border border-white/30"
              text="Descargar CV"
              onClick={() => downloadFile("/CV Mario Valentin Fraire Tepox.pdf")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
