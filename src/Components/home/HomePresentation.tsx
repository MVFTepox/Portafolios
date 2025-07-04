export const HomePresentation = () => {
  return (
    <>
      <div className="container mx-auto pt-20   text-white">
        <div className="flex flex-col md:flex-row justify-center   gap-20  ">
          <img
            className="rounded-full z-10 w-1/2 lg:w-1/4 border-2 border-white"
            src="/FotoVale.jpg"
            alt="Foto-De-Valentin"
          />

          <div className=" my-auto backdrop-blur-3xl p-10   border-1 rounded-2xl shadow-black shadow-sm ">
            <h1 className="text-4xl">Desarrollador FullStack</h1>
            <h2 className="text-xl">Mario Fraire</h2>
          </div>
        </div>
      </div>
    </>
  );
};
