import React from 'react';
import { COMPANY_DATA } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{COMPANY_DATA.name}</h3>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Soluciones de limpieza profesional adaptadas a tus necesidades.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <p className="font-semibold text-white">Contacto:</p>
                        <a href={`https://wa.me/${COMPANY_DATA.whatsapp}`} className="hover:text-blue-400 transition">
                            WhatsApp: +54 9 261 701 8836
                        </a>
                    </div>
                </div>

                <hr className="border-slate-800 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {currentYear} {COMPANY_DATA.name}. Todos los derechos reservados.</p>

                    <p className="mt-2 md:mt-0">
                        Diseñado y desarrollado por <span className="text-slate-300 font-medium cursor-pointer hover:text-blue-400">Penoff Pablo</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;