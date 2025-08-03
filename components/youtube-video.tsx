export default function YouTubeVideo({ videoId }: { videoId: string }) {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-anton text-3xl md:text-4xl text-primary">VIDEOS DESTACADOS</h2>
          <p className="font-poppins font-semibold text-gray-600 mt-2">
            Conoce más sobre el mundo inmobiliario con nuestros videos
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.youtube.com/@JannethAguirreBienesRaices/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-colors duration-300"
            >
              Ver más videos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
