interface PaquetesProps {
    fee: number;
}

export default function Paquetes({ fee }: PaquetesProps) {
    const formatCurrency = (num: number) => "₡" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="animate-slideUp">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Escenarios de Inversión</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
                    A continuación, presentamos los paquetes de honorarios de producción.
                    <br />
                    <strong className="text-fiesta-pink block mt-2 p-3 bg-red-50 rounded-lg border border-red-100 shadow-sm">
                        <i className="fas fa-exclamation-triangle mr-2"></i>
                        Nota Importante: Los costos de insumos, utilería y recursos necesarios para la producción NO están incluidos en estos paquetes.
                        Estos serán adquiridos por el cliente, o en su defecto por el estudio (en cuyo caso se definirá y facturará el costo previamente).
                    </strong>
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-end">
                {/* Card Básico */}
                <div className="price-card bg-white rounded-xl shadow p-6 flex flex-col relative overflow-hidden">
                    <div className="text-center mb-4 border-b pb-4">
                        <h3 className="text-lg font-bold text-gray-600">BÁSICO</h3>
                        <div className="text-3xl font-extrabold text-gray-800 mt-2">{formatCurrency(fee * 0.7)}</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Honorarios de Producción</div>
                    </div>
                    <ul className="text-sm space-y-3 mb-6 flex-grow">
                        <li className="flex items-start"><i className="fas fa-check text-green-500 mt-1 mr-2"></i><span>Sesión fotográfica estándar (2 horas de producción).</span></li>
                        <li className="flex items-start"><i className="fas fa-check text-green-500 mt-1 mr-2"></i><span>Iluminación básica de estudio.</span></li>
                        <li className="flex items-start"><i className="fas fa-check text-green-500 mt-1 mr-2"></i><span>Confeti manual (bolsa).</span></li>
                        <li className="flex items-start"><i className="fas fa-video text-blue-500 mt-1 mr-2"></i><span>Video Detrás de Escena (BTS) corto.</span></li>
                    </ul>
                    <div className="mt-auto">
                        <button className="w-full py-2 rounded border border-gray-300 hover:bg-gray-50 text-sm font-bold text-gray-600 transition">Seleccionar Básico</button>
                    </div>
                </div>

                {/* Card Estándar (Destacado) */}
                <div className="price-card featured rounded-xl shadow-xl p-6 flex flex-col relative overflow-hidden border-2 border-guanacaste-sun">
                    <div className="absolute top-0 right-0 bg-guanacaste-sun text-deep-purple text-[10px] font-bold px-3 py-1 rounded-bl">RECOMENDADO</div>
                    <div className="text-center mb-4 border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-bold text-deep-purple">ESTÁNDAR</h3>
                        <div className="text-4xl font-extrabold text-deep-purple mt-2">{formatCurrency(fee)}</div>
                        <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Honorarios de Producción</div>
                    </div>
                    <ul className="text-sm space-y-3 mb-6 flex-grow">
                        <li className="flex items-start"><i className="fas fa-check-circle text-fiesta-pink mt-1 mr-2"></i><span className="font-medium">Sesión fotográfica (3 horas de producción).</span></li>
                        <li className="flex items-start"><i className="fas fa-check-circle text-fiesta-pink mt-1 mr-2"></i><span className="font-medium">Iluminación Pop Avanzada (colores).</span></li>
                        <li className="flex items-start"><i className="fas fa-check-circle text-fiesta-pink mt-1 mr-2"></i><span className="font-medium">Uso de utilería creativa (piñas, cocos).</span></li>
                        <li className="flex items-start"><i className="fas fa-video text-blue-500 mt-1 mr-2"></i><span>Video BTS dinámico (Reels/TikTok).</span></li>
                        <li className="flex items-start"><i className="fas fa-check-circle text-fiesta-pink mt-1 mr-2"></i><span>Retoque digital color-pop (15 fotos).</span></li>
                    </ul>
                    <div className="mt-auto">
                        <button className="w-full py-2 rounded bg-deep-purple text-white hover:bg-indigo-900 text-sm font-bold shadow-md transition transform hover:scale-105">Elegir Estándar</button>
                    </div>
                </div>

                {/* Card Premium */}
                <div className="price-card bg-white rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
                    <div className="text-center mb-4 border-b pb-4">
                        <h3 className="text-lg font-bold text-gray-600">PREMIUM</h3>
                        <div className="text-3xl font-extrabold text-gray-800 mt-2">{formatCurrency(fee * 1.5)}</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Honorarios de Producción</div>
                    </div>
                    <ul className="text-sm space-y-3 mb-6 flex-grow">
                        <li className="flex items-start"><i className="fas fa-star text-yellow-500 mt-1 mr-2"></i><span>Sesión día completo (5 horas de producción).</span></li>
                        <li className="flex items-start"><i className="fas fa-star text-yellow-500 mt-1 mr-2"></i><span>Múltiples sets de iluminación y vestuario.</span></li>
                        <li className="flex items-start"><i className="fas fa-video text-blue-500 mt-1 mr-2"></i><span>Video BTS + Entrevistas + Teaser musical.</span></li>
                        <li className="flex items-start"><i className="fas fa-check text-green-500 mt-1 mr-2"></i><span>Retoque digital Full High-End (30+ fotos).</span></li>
                    </ul>
                    <div className="mt-auto">
                        <button className="w-full py-2 rounded border border-gray-300 hover:bg-gray-50 text-sm font-bold text-gray-600 transition">Seleccionar Premium</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
