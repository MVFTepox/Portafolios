import { BtnDecorationWithoutFuntion } from "../ui/Btn";
import { TextGenerateEffect } from "@/Components";
export const AbautMe = () => {
  return (
    <>
      <div className="py-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <TextGenerateEffect className="" duration={0.1} words="Hola, soy Mario Fraire, desarrollador FullStack con experiencia en
            tecnologías como React, Node.js, Express, MongoDB y TypeScript. Mi
            enfoque principal es la creación de soluciones innovadoras y
            escalables que permitan a los usuarios disfrutar de una experiencia
            excepcional en línea." />
          <div className="grid grid-cols-5 gap-y-3 gap-2">
            {/* front-end */}
            <BtnDecorationWithoutFuntion className="btn   hover:shadow-lg shadow-blue-500" text="React" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-green-500" text="Vue.js" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-blue-950" text="Tailwind" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-purple-600" text="Bootstrap" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-pink-500" text="Sass" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-yellow-500" text="JavaScript" />
            {/* back-end */}
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-blue-500" text="Next.js" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-green-800" text="Node.js" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-yellow-500" text="Express" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-green-500" text="MongoDB" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-blue-500" text="TypeScript" />
            <BtnDecorationWithoutFuntion className="btn  hover:shadow-lg shadow-purple-500" text="Prisma" />
          </div>
        </div>
      </div>
    </>
  );
};


