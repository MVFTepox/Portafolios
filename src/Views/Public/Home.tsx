import { Boxes, AbautMe, Proyects, ContactForm, MediaSocials } from "@/Components";
import { HomePresentation } from "@/Components/home/HomePresentation";
import { AnimatedSection } from "@/Hooks";

export const Home = () => {
  return (
    <>

      <div className="snap-y snap-mandatory overflow-y-scroll scroll-hidden h-screen">

        {/* Sección 1 */}
        <div id="home" className="relative snap-center h-screen py-20 overflow-hidden bg-black px-4 sm:px-8">
          <Boxes />

          <AnimatedSection animation="animate__fadeInUp" once={true}>
            <HomePresentation />
          </AnimatedSection>
        </div>

        {/* Sección 2 */}
        <div className="relative snap-center  py-20 overflow-hidden text-white bg-Abautme px-4 sm:px-8">
          <AnimatedSection animation="animate__fadeInUp" once={true}>
            <h2 id="skills" className="text-4xl sm:text-5xl mt-5 text-center underline decoration-double underline-offset-8">
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
        <div id="projects" className="relative snap-start py-20 overflow-hidden text-white bg-black px-4 sm:px-8">
          {/* Fondo de Boxes */}
          <Boxes className="z-10 absolute top-[24rem] left-0" />

          <div className="container z-20 mx-auto relative max-w-7xl px-4">
            <AnimatedSection animation="animate__fadeInUp" once={true}>
              <h2 className="z-auto text-4xl sm:text-5xl underline decoration-double underline-offset-8 mb-6">
                Mis Proyectos
              </h2>
            </AnimatedSection>
            <AnimatedSection
              animation="animate__fadeInUp"
              once={true}
              delay="animate__delay-1s"
            >
              <div className="py-5">
                <Proyects />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Sección 4 */}
        <div className="relative snap-center py-20 overflow-hidden text-white bg-black px-4 sm:px-8">
          <div className="container mx-auto max-w-3xl px-4">
            <AnimatedSection animation="animate__fadeInUp" once={true}>
              <h2
                id="contact"
                className="text-4xl sm:text-5xl mt-5 text-center sm:text-right underline decoration-double underline-offset-8"
              >
                Contáctame
              </h2>
              <AnimatedSection
                animation="animate__fadeInUp"
                once={true}
                delay="animate__delay-1s"
              >
                <div className="my-10 p-8 sm:p-10 bg-white text-black rounded-3xl shadow-lg w-full sm:w-auto mx-auto flex justify-center items-center">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <MediaSocials />
    </>
  );
};
