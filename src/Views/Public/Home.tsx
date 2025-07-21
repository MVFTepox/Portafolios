import { Boxes, AbautMe, Proyects } from "@/Components";
import { HomePresentation } from "@/Components/home/HomePresentation";
import { AnimatedSection } from "@/Hooks";
export const Home = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-hidden h-screen">
      {/* Sección 1 */}
      <div className="relative snap-center h-screen py-20 overflow-hidden bg-black">
        <Boxes />

        <AnimatedSection animation="animate__fadeInUp" once={true}>
          <HomePresentation />
        </AnimatedSection>
      </div>

      {/* Sección 2 */}
      <div className="relative snap-center h-screen py-20 overflow-hidden text-white bg-Abautme border-y-4 border-double">
        <AnimatedSection animation="animate__fadeInUp" once={true}>
          <h2 className="text-5xl mt-5 text-center underline decoration-double underline-offset-8">
            Sobre Mi
          </h2>
        </AnimatedSection>
        <AnimatedSection
          animation="animate__fadeInUp"
          once={true}
          delay="animate__delay-1s"
        >
          <AbautMe />
        </AnimatedSection>
      </div>

      {/* Sección 3 */}
      <div
        
        className="relative snap-center   py-20 overflow-hidden text-white bg-black border-y-4 border-double"
      >
        {/* Fondo de Boxes */}
        <Boxes className=" absolute top-0 left-0 mt-96" />

        <div className="container mx-auto relative z-10">
          <AnimatedSection animation="animate__fadeInUp" once={true}>
            <h2 className="z-auto text-5xl underline decoration-double underline-offset-8">
              Mis Proyectos
            </h2>
          </AnimatedSection>
          <AnimatedSection
            animation="animate__fadeInUp"
            once={true}
            delay="animate__delay-1s"
          >
            <div className="my-6 px-5">
              <Proyects />
            </div>
          </AnimatedSection>
        </div>
      
      </div>
      {/* Sección 4 */}
      <div className="relative snap-center h-screen py-20 overflow-hidden text-white bg-black border-y-4 border-double">
       <div className="container mx-auto">
         <AnimatedSection animation="animate__fadeInUp" once={true}>
          <h2 id="contact" className="text-5xl mt-5 text-end underline decoration-double underline-offset-8">
            Contactame
          </h2>
        </AnimatedSection>
       </div>
      </div>
    </div>
  );
};
