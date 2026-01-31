import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
    // 3D Tilt Effect Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden perspective-1000">
            {/* Background Gradients - Floating Animation */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left space-y-8">
                        <FadeIn delay={0.1}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium backdrop-blur-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                </span>
                                Bengkel Berpengalaman & Terpercaya
                            </motion.div>
                        </FadeIn>

                        <div className="overflow-hidden">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="block"
                                >
                                    Solusi Perawatan
                                </motion.span>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                    className="block"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Motor</span> agar Performa
                                </motion.span>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                    className="block"
                                >
                                    Selalu <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-400">Prima</span>
                                </motion.span>
                            </h1>
                        </div>

                        <FadeIn delay={0.5}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                                Kami menggabungkan pengalaman lebih dari 15 tahun dengan ketelitian tinggi untuk memastikan motor Anda kembali dalam kondisi terbaik.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 gap-2 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
                                    onClick={() => window.open("https://wa.me/6283838185659", "_blank")}
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <Phone className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">Booking Servis Sekarang</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors"
                                    onClick={() => window.open("https://wa.me/6283838185659", "_blank")}
                                >
                                    Konsultasi Gratis
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Trusted stats */}
                        <FadeIn delay={0.7}>
                            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 md:gap-12 text-center md:text-left border-t border-border/50">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-foreground">5k+</div>
                                    <div className="text-sm text-muted-foreground">Motor Diservis</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-foreground">4.9/5</div>
                                    <div className="text-sm text-muted-foreground">Rating Pelanggan</div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-foreground">15+</div>
                                    <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Visual / Image Placeholder with 3D Tilt */}
                    <div className="flex-1 w-full max-w-[500px] md:max-w-none relative group perspective-1000">
                        {/* Decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full animate-[spin_60s_linear_infinite] -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-secondary/10 rounded-full animate-[spin_40s_reverse_linear_infinite] -z-10" />

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative aspect-square z-10"
                        >
                            <div
                                className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-4 shadow-2xl relative"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />

                                <div className="w-full h-full rounded-2xl bg-black/40 flex items-center justify-center relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop"
                                        alt="Mechanic working on motorcycle"
                                        loading="eager"
                                        // @ts-ignore
                                        fetchPriority="high"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="absolute bottom-6 left-6 right-6"
                                        style={{ transform: "translateZ(40px)" }}
                                    >
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-lg shadow-black/20">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                                <Wrench className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Servis Berkualitas</div>
                                                <div className="text-white/60 text-sm">Garansi Kepuasan</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
