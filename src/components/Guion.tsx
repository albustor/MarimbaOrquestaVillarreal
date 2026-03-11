import { useState, useEffect } from 'react';

interface GuionProps {
    clientName: string;
}

export default function Guion({ clientName }: GuionProps) {
    const defaultScript = `"Hola ${clientName || '[Nombre del Líder]'}, espero que estén excelente.\n\nEstuve analizando la esencia de su grupo y me di cuenta de algo clave: ustedes no solo tocan música, ustedes crean la fiesta. Por eso, quiero proponerles el concepto 'La Fiesta Infinita'.\n\nHe preparado tres escenarios de inversión para adaptarnos a su presupuesto. Mi recomendación es el paquete Estándar, donde usaremos piñas reales, confeti explosivo y una iluminación estilo pop para vender alegría inmediata.\n\n¿Qué les parece si agendamos y hacemos que esta fiesta suceda?"`;

    const [scriptText, setScriptText] = useState(defaultScript);

    useEffect(() => {
        // Solo actualiza si no se ha modificado manualmente demasiado o si se quiere forzar
        // Para no perder los cambios manuales, podríamos no sobreescribir si ya tiene items agregados.
        // Una lógica simple: si incluye la frase inicial, la reemplazamos.
        // Para simplificar, actualizaremos si está muy cerca del default.
        setScriptText(defaultScript);
    }, [clientName]); // eslint-disable-line react-hooks/exhaustive-deps

    const addToScript = (text: string) => {
        setScriptText(prev => prev + "\n- " + text);
    };

    const clearScript = () => {
        if (confirm('¿Restaurar guion original?')) {
            setScriptText(defaultScript);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(scriptText);
        alert("¡Guion copiado!");
    };

    const ideas = [
        { title: 'Piña Gafas', icon: 'fa-glasses text-fiesta-pink', text: 'Propuesta: Usar piñas como gafas divertidas.' },
        { title: 'Brindis Cruzado', icon: 'fa-glass-cheers text-guanacaste-sun', text: 'Acción: Todos haciendo un brindis cruzado al centro.' },
        { title: 'Guerra de Polvos', icon: 'fa-drum text-deep-purple', text: 'Efecto: Guerra de polvos de colores en el coro.' },
        { title: 'Coco Micrófono', icon: 'fa-microphone-alt text-tropical-cyan', text: 'Prop: Cantar usando un coco como micrófono.' },
        { title: 'Lluvia Dorada', icon: 'fa-cloud-showers-heavy text-blue-400', text: 'Escena: Lluvia dorada de confeti cayendo.' },
        { title: 'Salto Sincronizado', icon: 'fa-running text-red-500', text: 'Acción: Salto sincronizado en el aire.' },
        { title: 'Selfie Grupal', icon: 'fa-camera-retro text-gray-600', text: 'Toma: Ángulo picado simulando una selfie grupal.' },
        { title: 'Silueta Fiestera', icon: 'fa-user-secret text-black', text: 'Iluminación: Contraluz fuerte para siluetas bailando.' },
        { title: 'Instrumento Joya', icon: 'fa-guitar text-orange-500', text: 'Detalle: Instrumentos brillando como joyas.' },
        { title: 'El Grito Mudo', icon: 'fa-volume-mute text-gray-400', text: 'Acción: Grito eufórico mudo (congelado).' },
        { title: 'Tren de Alegría', icon: 'fa-train text-green-500', text: 'Formación: Fila de conga o tren de la alegría.' },
        { title: 'Sombra Tropical', icon: 'fa-tree text-green-700', text: 'Prop: Hojas de palma proyectando sombras.' },
        { title: 'Explosión Color', icon: 'fa-bomb text-purple-600', text: 'Efecto: Explosión de color en el fondo.' },
        { title: 'Look Guanacaste', icon: 'fa-hat-cowboy text-yellow-600', text: 'Estilo: Sombreros y accesorios estilo Guanacaste.' },
        { title: 'Congelado Aire', icon: 'fa-magic text-indigo-400', text: 'Técnica: Congelar objetos en el aire.' }
    ];

    return (
        <div className="animate-slideUp">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Guion de Venta</h2>
                <div className="flex space-x-2">
                    <button onClick={clearScript} className="text-gray-400 hover:text-red-500 text-xs px-2"><i className="fas fa-trash"></i></button>
                    <button onClick={copyToClipboard} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition text-sm flex items-center">
                        <i className="fas fa-copy mr-2"></i>Copiar
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 relative mb-8">
                <textarea
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    className="w-full h-48 p-4 text-gray-700 leading-relaxed font-medium border-none focus:ring-0 resize-none bg-transparent"
                    spellCheck="false"
                ></textarea>
                <div className="absolute top-2 right-2 text-xs text-gray-300 pointer-events-none"><i className="fas fa-pen"></i> Editable</div>
            </div>

            <div className="border-t pt-8 border-gray-200">
                <h3 className="text-xl font-bold text-deep-purple mb-2 text-center"><i className="fas fa-lightbulb text-guanacaste-sun mr-2"></i>Banco de Ideas (Click para agregar)</h3>
                <p className="text-center text-xs text-gray-400 mb-6">Toca una tarjeta para insertar la idea en el guion.</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {ideas.map((idea, index) => (
                        <div key={index} className="idea-card bg-white p-3 rounded-lg shadow text-center border border-gray-100" onClick={() => addToScript(idea.text)}>
                            <i className={`fas ${idea.icon} text-2xl mb-1`}></i>
                            <p className="text-[10px] font-bold text-gray-700">{idea.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
