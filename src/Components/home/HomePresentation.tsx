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
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-stretch-ultra-expanded">
            Desarrollador FullStack
          </h1>

          <p className="text-base sm:text-lg text-gray-200">
            Hola soy <span className="text-xl font-semibold">Mario Fraire</span>
            , especializado en crear soluciones innovadoras, creativas y escalables para mejorar la experiencia de
            los usuarios en línea.
          </p>

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
