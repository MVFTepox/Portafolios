import { CardPin } from "@/Components";

export const Proyects = () => {
  return (
    <div className="p-4 mt-10 max-w-7xl mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-2">Proyectos de Front-End</h1>
        <h3 className="text-2xl mb-8 text-gray-100">
          Estos son mis proyectos creados con HTML, Vue y React
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CardPin
            title="Axo Web Digital"
            href="https://axo-web.netlify.app"
            src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
            alt="axo web digital"
            text="Proyecto creado para una empresa de venta de servicios de desarrollo web"
          />
          <CardPin
            title="Buffin del Norte"
            href="https://bufinorte.com"
            src="https://bufinorte.com/assets/bn-Duv9FRxm.jpg"
            alt="Imagen del proyecto"
            text="Página web de la empresa Bufin del Norte"
          />
          <CardPin
            title="Calculadora"
            href="https://calculadora-v1.vercel.app"
            src="https://static.vecteezy.com/system/resources/previews/030/729/036/non_2x/calculator-cartoon-icon-illustration-technology-icon-concept-isolated-premium-flat-cartoon-style-free-vector.jpg"
            alt="Imagen de referencia de calculadora"
            text="Proyecto de calculadora 🧮➕➖➗✖️"
          />
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-4xl font-bold mb-2">Proyectos de Back-End</h1>
        <h3 className="text-2xl mb-8 text-gray-100">
          Estos son mis proyectos creados con Node y Express
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CardPin
            title="API de Mercado Pago"
            href="https://github.com/ValentinFraire/api-MercadoPago"
            src="https://media.informabtl.com/wp-content/uploads/2025/03/eec732ea-mercado-pago-logo-tipo-rebranding-amarillo.jpg"
            alt="Mercado Pago Logo"
            text="API con MongoDB y Express con Mercado Pago para Axo Web Digital"
          />
        </div>
      </section>
    </div>
  );
};
