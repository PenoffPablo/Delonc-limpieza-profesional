import React from 'react';
import { Mailbox, MailIcon, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA, WHATSAPP_MESSAGE } from '../constants';

const Hero = () => {
    const whatsappLink = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-white px-4 py-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

                <div className="flex justify-center w-full mb-6 md:mb-10 px-2">
                    <h1 className="sr-only">{COMPANY_DATA.name}</h1>
                    <img
                        src="/Logo Delonc.png"
                        alt="Logo Delonc"
                        className="
            w-[110%] max-w-[450px] 
            sm:max-w-[500px] 
            md:max-w-[750px] 
            h-auto object-contain 
            transition-all duration-300
        "
                    />
                </div>


                <div className="text-center space-y-6 md:space-y-8">
                    <p className="text-base sm:text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-snug md:leading-relaxed">
                        Especialistas en limpieza profunda<span className="text-slate-900 font-medium">.</span>
                        <br className="hidden md:block" /> Recupera tu tiempo libre mientras nosotros dejamos todo impecable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 hover:scale-105"
                        >
                            <MessageCircle size={24} />
                            Comunicate con nosotros
                        </a>

                        <a
                            href={`mailto:${COMPANY_DATA.email}`}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 hover:scale-105"
                        >
                            <MailIcon size={24} />
                            Mandanos un correo
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-6">
                        <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">
                            Respuesta promedio: <span className="text-slate-600"> &lt; 15 minutos</span>
                        </p>
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-100 px-6 py-2 rounded-full text-sm font-bold shadow-sm">
                            <ShieldCheck size={18} className="shrink-0" />
                            <span>Servicio Garantizado en Mendoza</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;