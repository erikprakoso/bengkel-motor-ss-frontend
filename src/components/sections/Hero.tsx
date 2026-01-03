import React from "react";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left space-y-8">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                </span>
                                Bengkel Modern & Terpercaya
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                                Solusi Perawatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Motor</span> agar Performa Selalu <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-400">Prima</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                                Kami menggabungkan keahlian mekanik berpengalaman dengan alat diagnostik canggih untuk memastikan motor Anda kembali dalam kondisi terbaik.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 gap-2 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                                    onClick={() => window.open("https://wa.me/628123456789", "_blank")}
                                >
                                    <Phone className="w-5 h-5" />
                                    Booking Servis Sekarang
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 gap-2 border-primary/20 hover:bg-primary/5"
                                    onClick={() => window.open("https://wa.me/628123456789", "_blank")}
                                >
                                    Konsultasi Gratis
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Trusted stats */}
                        <FadeIn delay={0.5}>
                            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 md:gap-12 text-center md:text-left border-t border-border/50">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-white">5k+</div>
                                    <div className="text-sm text-muted-foreground">Motor Diservis</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-white">4.9/5</div>
                                    <div className="text-sm text-muted-foreground">Rating Pelanggan</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                                    <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Visual / Image Placeholder */}
                    <div className="flex-1 w-full max-w-[500px] md:max-w-none relative group">
                        <FadeIn delay={0.3} direction="left" className="w-full h-full">
                            {/* Decorative circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-secondary/10 rounded-full animate-[spin_40s_reverse_linear_infinite]" />

                            {/* Card Glassmorphism */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-4 shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />

                                {/* This would ideally be a real image. Using a stylized placeholder. */}
                                <div className="w-full h-full rounded-2xl bg-black/40 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop"
                                        alt="Mechanic working on motorcycle"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <Wrench className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Servis Berkualitas</div>
                                                <div className="text-white/60 text-sm">Garansi Kepuasan</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
