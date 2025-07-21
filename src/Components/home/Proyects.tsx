import { CardPin } from "@/Components";
export const Proyects = () => {
  return (
    <>
      <div className="p-4 mt-10 ">
        <h1 className="text-4xl">Proyectos de front-End </h1>
        <h3 className="text-2xl ">
          Estos son mis proyectos creados con html, vue y react
        </h3>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <CardPin
              title="Axo Web Digital"
              href="https://axo-web.netlify.app"
              src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
              alt="axo web digital"
              text="Proyecto creado para una empresa de vente de servicios de desarrollo web"
            />
            <CardPin
              title="Buffin del Norte"
              href="https://bufinorte.com"
              src="https://bufinorte.com/assets/bn-Duv9FRxm.jpg"
              alt="Imagen del proyecto"
              text="Pagina web de la empresa Bufin del Norte"
            />
            <CardPin
              title="Proyecto 1"
              href="https://github.com/ValentinFrai/Proyecto-1"
              src="https://via.placeholder.com/150"
              alt="Imagen del proyecto"
              text="Descripción del proyecto 1dsd"
            />
            <CardPin
              title="Proyecto 1"
              href="https://github.com/ValentinFrai/Proyecto-1"
              src="https://via.placeholder.com/150"
              alt="Imagen del proyecto"
              text="Descripción del proyecto 1dsd"
            />
          </div>
          <div className="mt-20">
            <h1>Proyectos de back-End</h1>
            <h3>Estos son mis proyectos creados con node y express</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <CardPin
              title="Axo Web Digital"
              href="https://axo-web.netlify.app"
              src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
              alt="axo web digital"
              text="Proyecto creado para una empresa de vente de servicios de desarrollo web"
            />
            <CardPin
              title="Buffin del Norte"
              href="https://bufinorte.com"
              src="https://bufinorte.com/assets/bn-Duv9FRxm.jpg"
              alt="Imagen del proyecto"
              text="Pagina web de la empresa Bufin del Norte"
            />
            <CardPin
              title="Proyecto 1"
              href="https://github.com/ValentinFrai/Proyecto-1"
              src="https://via.placeholder.com/150"
              alt="Imagen del proyecto"
              text="Descripción del proyecto 1dsd"
            />
            <CardPin
              title="Proyecto 1"
              href="https://github.com/ValentinFrai/Proyecto-1"
              src="https://via.placeholder.com/150"
              alt="Imagen del proyecto"
              text="Descripción del proyecto 1dsd"
            />
          </div>
        </div>
      </div>
    </>
  );
};
