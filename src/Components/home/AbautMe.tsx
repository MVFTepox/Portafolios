
export const AbautMe = () => {
  return (
    <>
      <div className="mt-10">
        <div className="w-1/2 p-5 rounded-2xl mx-auto  text-center bg-[#ffffff65]">
          <p className="text-2xl">
            Hola soy desarrollador FullStack con experiencia en tecnologías como
            React, Node.js, Express, MongoDB y TypeScript. Mi enfoque principal
            es la creación de soluciones innovadoras y escalables que permitan a
            los usuarios disfrutar de una experiencia excepcional en línea.
          </p>
        </div> 
        
          <div className="text-center mt-10 text-5xl    ">
            <h1>Tecnologias que trabajo</h1>
          </div>
          <div className="mt-5 w-full max-w-6xl mx-auto p-5 backdrop-blur-2xl bg-[#ffffff6d] overflow-x-auto whitespace-nowrap flex justify-center gap-5 rounded-2xl">
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
                className="h-16 object-contain backdrop-blur-lg p-2 rounded-2xl   "
                alt={alt}
                src={src}
              />
            ))}
          </div>
    
      </div>
    </>
  );
};
