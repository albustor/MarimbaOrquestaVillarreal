import { useState } from 'react';

interface AdminProps {
    fee: number;
    setFee: (newFee: number) => void;
    clientName: string;
    setClientName: (newName: string) => void;
}

export default function Admin({ fee, setFee, clientName, setClientName }: AdminProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Materials Costs (Internal reference, as requested by user to keep separate from honorarios)
    const [costA, setCostA] = useState(13000);
    const [costB, setCostB] = useState(21500);
    const [costC, setCostC] = useState(7000);
    const [bufferPerc, setBufferPerc] = useState(10);

    const subtotal = costA + costB + costC;
    const buffer = subtotal * (bufferPerc / 100);
    const materialsStd = subtotal + buffer;

    const handleLogin = () => {
        if (password === '26172918') {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    const formatCurrency = (num: number) => "₡" + num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="relative">
            {!isAuthenticated && (
                <div className="absolute inset-0 z-50 bg-gray-100/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 rounded-xl min-h-[500px]">
                    <div className={`bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center border-t-4 border-red-600 transition-transform ${error ? 'animate-shake' : ''}`}>
                        <i className="fas fa-lock text-4xl text-red-600 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Acceso Restringido</h3>
                        <p className="text-sm text-gray-500 mb-6">Solo personal autorizado para configuración.</p>
                        <input
                            type="password"
                            placeholder="Ingrese clave de acceso"
                            className={`mb-4 text-center text-lg tracking-widest ${error ? 'border-red-500' : ''}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        />
                        <button onClick={handleLogin} className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition">DESBLOQUEAR</button>
                        {error && <p className="text-red-500 text-xs mt-3"><i className="fas fa-exclamation-circle mr-1"></i>Clave incorrecta</p>}
                    </div>
                </div>
            )}

            <div className={`transition duration-500 ${!isAuthenticated ? 'filter blur-sm pointer-events-none' : 'animate-slideUp'}`}>
                <div className="flex justify-between items-center mb-6 pt-4">
                    <h2 className="text-2xl font-bold text-gray-800"><i className="fas fa-cogs mr-2 text-gray-400"></i>Panel de Administración</h2>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-xs font-bold">ZONA SEGURA</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Costos Materiales */}
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h3 className="font-bold text-lg text-deep-purple">Costos Materiales (Base Estándar)</h3>
                            <p className="text-xs text-gray-500">Configuración Base</p>
                        </div>
                        <div className="space-y-4">
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">A. Utilería</label><input type="number" value={costA} onChange={(e) => setCostA(Number(e.target.value))} /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">B. Efectos</label><input type="number" value={costB} onChange={(e) => setCostB(Number(e.target.value))} /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">C. Estética/Otros</label><input type="number" value={costC} onChange={(e) => setCostC(Number(e.target.value))} /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">% Imprevistos</label><input type="number" value={bufferPerc} onChange={(e) => setBufferPerc(Number(e.target.value))} /></div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-600">Total Materiales:</span>
                            <span className="text-lg font-bold text-fiesta-pink">{formatCurrency(materialsStd)}</span>
                        </div>
                    </div>

                    {/* Honorarios Globales */}
                    <div className="bg-white p-6 rounded-xl shadow border border-green-200">
                        <h3 className="font-bold text-lg mb-4 text-green-800 border-b pb-2">Honorarios Producción</h3>
                        <div className="mb-4">
                            <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Honorario Fijo (Ganancia + Equipo)</label>
                            <input
                                type="number"
                                className="font-bold text-lg text-green-700 bg-green-50"
                                value={fee}
                                onChange={(e) => setFee(Number(e.target.value))}
                            />
                            <p className="text-[10px] text-gray-400 mt-2">Este monto es el que se presenta al cliente en la pestaña de paquetes.</p>
                        </div>

                        {/* Split Preview */}
                        <div className="mt-6 border-t pt-4">
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Distribución Interna (Split Sheet)</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between"><span>Alberto (30%):</span><span className="font-bold">{formatCurrency(fee * 0.30)}</span></div>
                                <div className="flex justify-between"><span>Lenny (20%):</span><span className="font-bold">{formatCurrency(fee * 0.20)}</span></div>
                                <div className="flex justify-between"><span>Cristina (20%):</span><span className="font-bold">{formatCurrency(fee * 0.20)}</span></div>
                                <div className="flex justify-between"><span>Emily (10%):</span><span className="font-bold">{formatCurrency(fee * 0.10)}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Configuración Ficha Técnica */}
                <div className="bg-gray-800 text-white p-6 rounded-xl shadow mb-8 border border-gray-700">
                    <h3 className="font-bold text-lg mb-4 flex items-center text-tropical-cyan"><i className="fas fa-sliders-h mr-2"></i>Configuración Técnica</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div><label className="block text-xs font-bold uppercase mb-1 opacity-70">Apertura</label><input type="text" className="bg-gray-700 border-gray-600 text-white" defaultValue="f/8" /></div>
                        <div><label className="block text-xs font-bold uppercase mb-1 opacity-70">Velocidad</label><input type="text" className="bg-gray-700 border-gray-600 text-white" defaultValue="1/160s" /></div>
                        <div><label className="block text-xs font-bold uppercase mb-1 opacity-70">ISO</label><input type="text" className="bg-gray-700 border-gray-600 text-white" defaultValue="100" /></div>
                        <div><label className="block text-xs font-bold uppercase mb-1 opacity-70">Flash</label><input type="text" className="bg-gray-700 border-gray-600 text-white" defaultValue="1/8" /></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">* Estos valores son de referencia interna.</p>
                </div>

                {/* Personalización */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                    <h3 className="font-bold text-lg mb-4 text-deep-purple border-b pb-2">Personalización Guion</h3>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre del Cliente / Líder</label>
                        <input
                            type="text"
                            placeholder="Ej. Juan, Los Fiesteros..."
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
