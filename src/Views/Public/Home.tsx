import { Boxes, AbautMe,  } from "@/Components";
import { HomePresentation } from "@/Components/home/HomePresentation";

export const Home = () => {
  return (
    <>
      <div className="relative min-h-auto h-screen py-20 scroll-auto overflow-hidden bg-black">
        <Boxes className="" />
        <HomePresentation />
      </div>
      <div className="relative min-h-auto h-screen py-20 overflow-hidden text-white bg-black border-y-4 border-double">
        <h2 className="text-5xl text-center  underline decoration-double underline-offset-8 ">
          Sobre Mi
        </h2>
        <AbautMe />
      </div>
      <div id="contact" className="  mx-auto min-h-auto h-screen py-20 overflow-hidden text-white bg-black border-y-4 border-double">
        <div className="container mx-auto">
          <h2 className="text-5xl  underline decoration-double underline-offset-8 ">
            Mis Habilidades Tecnicas
          </h2>
          <div className=" cpmamy-6 px-5">

          </div>
        </div>
      </div>
    </>
  );
};
