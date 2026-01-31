import React from "react";
import { ClipboardList, Search, Wrench, Gauge, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
    {
        icon: <ClipboardList className="w-8 h-8" />,
        title: "Pendaftaran",
        description: "Daftar langsung atau booking via WhatsApp tanpa antri lama.",
        color: "from-blue-500 to-cyan-400",
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "Cek & Diagnosa",
        description: "Pemeriksaan menyeluruh untuk menemukan sumber masalah.",
        color: "from-orange-500 to-amber-400",
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Pengerjaan",
        description: "Perbaikan oleh mekanik ahli dengan standar kerja presisi.",
        color: "from-red-500 to-rose-400",
    },
    {
        icon: <Gauge className="w-8 h-8" />,
        title: "Pemeriksaan Akhir",
        description: "Uji jalan & kontrol kualitas ketat sebelum motor diserahkan kembali.",
        color: "from-purple-500 to-violet-400",
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Selesai",
        description: "Motor prima, bergaransi, dan siap melaju kembali.",
        color: "from-green-500 to-emerald-400",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[100px] -translate-y-1/2 rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            Alur Servis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Profesional</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Proses transparan, cepat, dan terukur demi hasil terbaik untuk kendaraan Anda.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative h-full bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 overflow-hidden hover:border-white/10 transition-colors"
                            >
                                {/* Gradient Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Large Watermark Number */}
                                <div className="absolute -right-4 -bottom-8 text-9xl font-black text-foreground/5 select-none pointer-events-none group-hover:text-foreground/10 transition-colors duration-500">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] mb-6 shadow-lg`}>
                                        <div className="w-full h-full rounded-2xl bg-black/90 flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Arrow connector for desktop (skip last item) */}
                                    {index !== steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-9 -translate-y-1/2 z-20 text-muted-foreground/20">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
