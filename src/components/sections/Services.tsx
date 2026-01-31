import React from "react";
import { Wrench, Gauge, Zap, Disc } from "lucide-react";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const services = [
    {
        icon: <Gauge className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
        title: "Servis Rutin / Tune Up",
        description: "Pembersihan karburator/throttle body, cek filter udara, busi, klep, dan penyetelan standar pabrik.",
        priceStart: "Mulai 50rb",
    },
    {
        icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-secondary" />,
        title: "Servis Besar & Mesin",
        description: "Turun mesin, ganti seher, stang seher, noken as, dan perbaikan komponen internal mesin lainnya.",
        priceStart: "Konsultasi",
    },
    {
        icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
        title: "Kelistrikan & Injeksi",
        description: "Reset ECU, cleaning injektor, perbaikan kabel body, spul, kiprok, dan masalah kelistrikan lain.",
        priceStart: "Mulai 35rb",
    },
    {
        icon: <Disc className="w-8 h-8 md:w-10 md:h-10 text-secondary" />,
        title: "Ganti Oli & Ban",
        description: "Tersedia berbagai merk oli original dan ban tubeless/tube type berbagai ukuran dengan pemasangan gratis.",
        priceStart: "Harga Part",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Utama</span> Kami
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Apapun masalah motor Anda, mekanik kami siap memberikan solusi terbaik dengan pengerjaan yang rapi dan bergaransi.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                <div className="p-4 rounded-2xl bg-muted group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                                    {service.icon}
                                </div>
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="pt-4 flex items-center justify-between">
                                        <span className="text-sm font-semibold text-secondary px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                                            {service.priceStart}
                                        </span>
                                        <Button
                                            variant="link"
                                            className="text-foreground group-hover:text-primary p-0 h-auto font-semibold"
                                            onClick={() => window.open("https://wa.me/6283838185659", "_blank")}
                                        >
                                            Tanya Detail &rarr;
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
