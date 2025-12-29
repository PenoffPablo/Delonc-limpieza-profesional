import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DATA, WHATSAPP_MESSAGE } from '../constants';

const FloatingWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} className="animate-bounce-short" />
            <span className="font-bold text-lg hidden sm:block">
                Comunicate con nosotros
            </span>
        </a>
    );
};

export default FloatingWhatsApp;