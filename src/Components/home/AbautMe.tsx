export const AbautMe = () => {
  return (
    <div className="mt-10 px-4 max-w-5xl mx-auto">
      <div className="bg-opacity-40 backdrop-blur-lg bg-[#ffffff14] rounded-2xl p-6 sm:p-10 mx-auto text-center w-full md:w-2/4 lg:w-4/4">
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
          Soy desarrollador <strong>FullStack</strong> con experiencia en la creación de aplicaciones web modernas y escalables.
          Trabajo con tecnologías como <strong>React</strong>, <strong>Vue.js</strong>, <strong>TypeScript</strong> y <strong>Tailwind CSS</strong> en el frontend; y en el backend utilizo <strong>Node.js</strong>, <strong>Express</strong> y <strong>MongoDB</strong>.
          <br /><br />
          He desarrollado APIs RESTful seguras, sistemas de autenticación con <strong>JWT</strong> y <strong>bcrypt</strong>, e integrado pasarelas de pago como <strong>Mercado Pago</strong>.
          Además, tengo experiencia desplegando proyectos en plataformas como <strong>AWS</strong>, <strong>Vercel</strong> y <strong>Railway</strong>.
          <br /><br />
          Me enfoco en entregar soluciones sólidas, eficientes y con una excelente experiencia de usuario, aplicando buenas prácticas de desarrollo, arquitectura limpia y patrones modernos tanto en el cliente como en el servidor.
        </p>
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
            alt: "logo typescript",
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          },
          {
            alt: "logo tailwind",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
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
