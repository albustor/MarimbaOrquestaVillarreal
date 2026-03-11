export default function Concepto() {
    return (
        <div className="animate-slideUp space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-deep-purple mb-4">Concepto Creativo: "La Fiesta Infinita"</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Una explosión visual que captura la esencia, el color y la alegría desbordante de la música charanga y la cultura de Santa Cruz.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Moodboard / Inspiration */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-tropical-cyan">
                    <h3 className="text-xl font-bold flex items-center mb-4 text-gray-800">
                        <i className="fas fa-palette text-tropical-cyan mr-3 text-2xl"></i>
                        Paleta de Colores
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Colores vibrantes que representan la calidez del trópico y la energía de la música en vivo.
                    </p>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                        <div className="bg-guanacaste-sun h-16 rounded-md shadow-inner flex items-end justify-center pb-1"><span className="text-[10px] font-bold text-deep-purple">#FFD700</span></div>
                        <div className="bg-fiesta-pink h-16 rounded-md shadow-inner flex items-end justify-center pb-1"><span className="text-[10px] font-bold text-white">#FF007F</span></div>
                        <div className="bg-tropical-cyan h-16 rounded-md shadow-inner flex items-end justify-center pb-1"><span className="text-[10px] font-bold text-deep-purple">#00E5FF</span></div>
                        <div className="bg-deep-purple h-16 rounded-md shadow-inner flex items-end justify-center pb-1"><span className="text-[10px] font-bold text-white">#4B0082</span></div>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li><strong className="text-guanacaste-sun">Amarillo Guanacaste:</strong> Sol, riqueza, energía inagotable.</li>
                        <li><strong className="text-fiesta-pink">Rosa Fiesta:</strong> Pasión, modernidad, sabor latino.</li>
                        <li><strong className="text-tropical-cyan">Cian Tropical:</strong> Frescura, playas, dinamismo.</li>
                        <li><strong className="text-deep-purple">Morado Profundo:</strong> Elegancia nocturna, contraste, profesionalismo.</li>
                    </ul>
                </div>

                {/* Utilería / Props */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-fiesta-pink">
                    <h3 className="text-xl font-bold flex items-center mb-4 text-gray-800">
                        <i className="fas fa-mask text-fiesta-pink mr-3 text-2xl"></i>
                        Elementos y Utilería
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Transformamos frutas y objetos locales en accesorios visuales de alto impacto publicitario.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <i className="fas fa-cocktail text-guanacaste-sun mt-1 mr-3 text-lg"></i>
                            <div>
                                <strong className="text-gray-800 block">Cocos y Piñas Neón</strong>
                                <span className="text-sm text-gray-600">Frutas tropicales pintadas con colores vibrantes o usadas como accesorios divertidos.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-drum text-deep-purple mt-1 mr-3 text-lg"></i>
                            <div>
                                <strong className="text-gray-800 block">Instrumentos como Joyas</strong>
                                <span className="text-sm text-gray-600">Iluminación enfocada para resaltar la textura de marimbas, congas y metales.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-magic text-tropical-cyan mt-1 mr-3 text-lg"></i>
                            <div>
                                <strong className="text-gray-800 block">Confeti y Polvos de Color Congelados</strong>
                                <span className="text-sm text-gray-600">Tomas de alta velocidad para capturar la ráfaga de movimiento y euforia.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mood/Vibe */}
            <div className="bg-gradient-to-r from-deep-purple to-fiesta-pink p-8 rounded-xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <i className="fas fa-camera-retro mr-3"></i> Dirección de Arte
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                    La iluminación será de estilo <strong>Pop Avanzado</strong>. Utilizaremos luces de estudio de alta potencia para lograr bordes definidos, sombras muy marcadas (estilo flash directo) pero bien expuestas, y gelatinas de color en luces de contra (backlights) para dar tintes cian y magenta. La actitud de los músicos debe ser de pura adrenalina: riendo a carcajadas, saltando o en plena "nota" musical, logrando imágenes que <em>suenan</em> al verlas.
                </p>
            </div>
        </div>
    );
}
