import React from 'react';
import {
    Building2,
    Building,
    Briefcase,
    Factory,
    Wind,
    Sparkles,
    Shovel,
    LayoutGrid,
    CheckCircle2
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        title: "Limpieza de Edificios",
        icon: Building2,
        color: "bg-blue-50 text-blue-600"
    },
    {
        id: 2,
        title: "Limp. de Consorcios",
        icon: Building,
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        id: 3,
        title: "Limp. de Oficinas",
        icon: Briefcase,
        color: "bg-slate-50 text-slate-600"
    },
    {
        id: 4,
        title: "Limp. de Empresas",
        icon: LayoutGrid,
        color: "bg-cyan-50 text-cyan-600"
    },
    {
        id: 5,
        title: "Limp. de Bodegas",
        icon: Factory,
        color: "bg-amber-50 text-amber-600"
    },
    {
        id: 6,
        title: "Alfombras y Pisos",
        icon: Sparkles,
        color: "bg-teal-50 text-teal-600"
    },
    {
        id: 7,
        title: "Extractores y Campanas para restaurantes",
        icon: Wind,
        color: "bg-orange-50 text-orange-600"
    },
    {
        id: 8,
        title: "Jardinería Áreas Grandes",
        icon: Shovel,
        color: "bg-green-50 text-green-600"
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-white" id="servicios">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Servicios Profesionales
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Soluciones especializadas de limpieza y mantenimiento para cada sector en Mendoza.
                    </p>
                </div>

                {/* Grid optimizado: 1 col en mobile, 2 en tablet, 3 en desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service) => {
                        const IconComponent = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${service.color} transition-transform group-hover:scale-110`}>
                                    <IconComponent size={24} />
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 mb-2">
                                    {service.title}
                                </h3>

                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <CheckCircle2 size={14} className="text-green-500" />
                                    <span>Personal capacitado</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;