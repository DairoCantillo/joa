export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              ¿Estás listo para comenzar a acortar?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Únase a miles de especialistas en marketing, creadores de
              contenido y empresas que utilizan Joa.io todos los días.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <button className="rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Empieza gratis
            </button>
            <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Contactar con Ventas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
