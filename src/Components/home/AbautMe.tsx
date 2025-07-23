export const AbautMe = () => {
  return (
    <div className="mt-10 px-4 max-w-5xl mx-auto">
      <div className=" bg-opacity-40 backdrop-blur-lg bg-[#ffffff14] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl p-6 sm:p-10 mx-auto  w-full md:w-2/4 lg:w-4/4">
        <div className="card border-1 border-gray-400">
          <div className="card-body">
            <p className="card-text">
              Soy desarrollador <strong>FullStack</strong> con experiencia en la
              creación de aplicaciones web modernas y escalables. Trabajo con
              tecnologías como <strong>React</strong>, <strong>Vue.js</strong>,{" "}
              <strong>TypeScript</strong> y <strong>Tailwind CSS</strong> en el
              frontend; y en el backend utilizo <strong>Node.js</strong>,{" "}
              <strong>Express</strong> y <strong>MongoDB</strong>.
            </p>
          </div>
        </div>

        <div className="card border-1 border-gray-400">
          <div className="card-body">
            <p className="card-text">
              He desarrollado APIs RESTful seguras, sistemas de autenticación
              con <strong>JWT</strong> y <strong>bcrypt</strong>, e integrado
              pasarelas de pago como <strong>Mercado Pago</strong>. Además,
              tengo experiencia desplegando proyectos en plataformas como{" "}
              <strong>AWS</strong>, <strong>Vercel</strong> y{" "}
              <strong>Railway</strong>.
            </p>
          </div>
        </div>

        <div className="card border-1 border-gray-400">
          <div className="card-body">
            <p className="card-text">
              También tengo dominio en herramientas de diseño como{" "}
              <strong>Figma</strong>, <strong>Adobe Photoshop</strong> e{" "}
              <strong>Illustrator</strong>, que utilizo para diseñar interfaces
              intuitivas, limpias y funcionales. Como complemento, tengo
              conocimientos en <strong>modelado 3D</strong>, lo cual me permite
              enriquecer la experiencia visual en presentaciones o sitios
              interactivos.
            </p>
          </div>
        </div>

        <div className="card border-1 border-gray-400 col-span-1 md:col-span-2 lg:col-span-3">
          <p>
            Me enfoco en entregar soluciones sólidas, eficientes y con una
            excelente experiencia de usuario, aplicando buenas prácticas de
            desarrollo, arquitectura limpia y patrones modernos tanto en el
            cliente como en el servidor.
          </p>
        </div>
      </div>

      <div className=" mt-12 mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">
          Tecnologías que trabajo
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto p-4 backdrop-blur-lg bg-[#ffffff14] rounded-2xl overflow-x-auto whitespace-nowrap flex gap-6">
        {[
          {
            alt: "logo html",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          },
          {
            alt: "logo css",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          },
          {
            alt: "logo javascript",
            src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          },
          {
            alt: "logo git",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
          },
          {
            alt: "logo vue",
            src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          },
          {
            alt: "logo react",
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          },
          {
            alt: "logo node",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          },
          {
            alt: "logo mongo",
            src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
          },
          {
            alt: "logo MySQL workbench",
            src: "https://www.citypng.com/public/uploads/preview/hd-mysql-logo-transparent-background-701751694771788209ydqoapx.png"
          },
          {
            alt: "logo typescript",
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          },
          {
            alt: "logo tailwind",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          },
          {
            alt: "logo Bootstrap",
            src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          },
          {
            alt: "logo figma",
            src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          },
          {
            alt: "logo photoshop",
            src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
          },
          {
            alt: "logo illustrator",
            src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
          },
          {
            alt: "Autocad Maya Logo",
            src: "data:image/png;base64,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"
          }
        ].map(({ alt, src }) => (
          <img
            key={alt}
            className="h-12 sm:h-16 object-contain rounded-2xl p-2 bg-white bg-opacity-60"
            alt={alt}
            src={src}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
