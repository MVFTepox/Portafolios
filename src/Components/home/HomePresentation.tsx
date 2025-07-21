import { BtnDecorationWithoutFuntion } from "@/Components/";
import { scrollById } from "@/Lib";

export const HomePresentation = () => {

  //funcion para descargar un archivo que este en la carpeta public
  function downloadFile(filename: string) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename;
    link.click();
  }
  //funcion para ir a la seccion de contacto
  
  return (
    <>
      <div className="container mx-auto pt-20   text-white">
        <div className="flex flex-col md:flex-row justify-center   gap-20">
          <img
            className="rounded-full z-10 w-1/2 lg:w-1/4 border-2 border-white"
            src="/FotoVale.jpg"
            alt="Foto-De-Valentin"
          />

          <div className=" my-auto backdrop-blur-3xl p-10   border-1 rounded-2xl shadow-black shadow-sm">
            <h1 className="text-5xl mb-3 font-stretch-ultra-expanded ">Desarrollador FullStack</h1>

            <p className="text-j">
              Hola soy <span className="text-xl">Mario Fraire</span> especializado en crear soluciones innovadoras y
              escalables <br />  para mejorar la experiencia de los usuarios en línea.
            </p>
            <div className="flex gap-5 mt-4">
              <BtnDecorationWithoutFuntion
                className="btn bg-[#1da1f2] border-0 hover:bg-[#c7caea] active:bg-amber-50  "
                text="Contactame" onClick={() => scrollById("contact")}
              />
              <BtnDecorationWithoutFuntion
                className="btn   hover:shadow-lg shadow-blue-500"
                text="Descargar CV" onClick={() => downloadFile("/CV.pdf")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
