export default function Resumen() {
  return (
    <div className="animate-slideUp">
      <div className="text-center mb-10">
        <span className="text-fiesta-pink font-bold tracking-widest text-sm uppercase">Visión Estratégica</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-deep-purple">El Impacto de la Imagen</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Más que una fotografía, estamos creando la herramienta de ventas definitiva para la agrupación.</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-guanacaste-sun mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          <i className="fas fa-eye text-guanacaste-sun mr-3"></i>Profundizando en la Idea
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          La música entra por los oídos, pero el deseo de contratación entra por los ojos. Cuando un cliente (unos novios, un productor de eventos o una empresa corporativa) busca un grupo musical en la zona de Guanacaste, no solo busca sonido; busca <strong>asegurar el éxito y la alegría de su evento</strong>.
        </p>
        <p className="text-gray-600 leading-relaxed">
          El concepto &quot;La Fiesta Infinita&quot; saca al grupo de la tradicional pose seria de banda y los coloca en el clímax de la celebración. Al utilizar elementos tropicales (cocos, piñas, colores cálidos) pero bajo el control de la iluminación de estudio de alta gama y confeti congelado, creamos un choque visual que transmite <strong>el auténtico calor de Santa Cruz con un estándar de publicidad pop internacional</strong>.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-center text-deep-purple mb-8">¿Qué impacto tendrá esto en el grupo?</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Impacto 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:shadow-md transition">
          <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl mb-4 shadow">
            <i className="fas fa-star"></i>
          </div>
          <h4 className="font-bold text-lg text-indigo-900 mb-2">Posicionamiento Premium</h4>
          <p className="text-sm text-gray-600">Una imagen limpia, vibrante y altamente producida justifica y respalda el valor del grupo. El cliente percibe inmediatamente que está contratando a profesionales de primer nivel, separándolos radicalmente de la competencia local amateur.</p>
        </div>

        {/* Impacto 2 */}
        <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 hover:shadow-md transition">
          <div className="h-12 w-12 bg-fiesta-pink text-white rounded-full flex items-center justify-center text-xl mb-4 shadow">
            <i className="fas fa-magnet"></i>
          </div>
          <h4 className="font-bold text-lg text-pink-900 mb-2">Gatillo de Contratación</h4>
          <p className="text-sm text-gray-600">Las fotos actuarán como una promesa visual. Ver al grupo saltando de alegría rodeados de color comunica: <em>&quot;Si nos contratas, esta es exactamente la euforia y la pista llena que vivirán tus invitados&quot;</em>. Vendemos una experiencia asegurada.</p>
        </div>

        {/* Impacto 3 */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition">
          <div className="h-12 w-12 bg-tropical-cyan text-deep-purple rounded-full flex items-center justify-center text-xl mb-4 shadow">
            <i className="fas fa-share-alt"></i>
          </div>
          <h4 className="font-bold text-lg text-blue-900 mb-2">Poder Multimedia</h4>
          <p className="text-sm text-gray-600">Al trabajar con alto contraste y fondos limpios, el material resultante es ultra-versátil. Perfecto para crear portadas impactantes en Spotify, Press Kits magnéticos para productoras, o reels virales en TikTok e Instagram que detienen el <em>scroll</em> de inmediato.</p>
        </div>
      </div>
    </div>
  );
}
