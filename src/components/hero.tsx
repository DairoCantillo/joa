import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                Acortar su URL
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Enlaces cortos, grandes resultados
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Transforme enlaces largos y difíciles de manejar en URL limpias,
                memorables y rastreables con nuestro poderoso acortador de URL.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Empezar
              </button>
              <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Más información
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              width={500}
              height={400}
              alt="URL Shortener Dashboard"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
