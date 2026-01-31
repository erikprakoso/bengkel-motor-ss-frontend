import React from "react";
import { Wrench, Zap, ThumbsUp, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const features = [
    {
        icon: <ThumbsUp className="w-10 h-10 text-primary" />,
        title: "Mekanik Berpengalaman",
        description: "Tim kami terdiri dari teknisi profesional dengan jam terbang tinggi di berbagai jenis motor.",
    },
    {
        icon: <Zap className="w-10 h-10 text-secondary" />,
        title: "Pengerjaan Teliti",
        description: "Setiap baut dan komponen diperlakukan dengan hati-hati dan presisi demi hasil yang maksimal dan awet.",
    },
    {
        icon: <Wrench className="w-10 h-10 text-primary" />,
        title: "Sparepart Original",
        description: "Kami hanya menyediakan suku cadang asli dan ban berkualitas untuk keamanan berkendara Anda.",
    },
    {
        icon: <PenTool className="w-10 h-10 text-secondary" />,
        title: "Lokasi Strategis & Terbuka",
        description: "Bengkel dengan konsep outdoor yang santai, Anda bisa melihat langsung proses pengerjaan motor Anda.",
    },
];

export default function USP() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div
                                className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)] transition-all duration-300 group"
                            >
                                <div className="mb-4 bg-muted w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
