import React from "react";
import { BadgeCheck, Info } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Spareparts() {
    return (
        <section id="spareparts" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-8">
                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                Suku Cadang <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Original</span> & Berkualitas
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Kami menyediakan suku cadang lengkap untuk berbagai jenis motor. Mulai dari Honda, Yamaha, Suzuki, hingga Kawasaki. Dijamin keasliannya dan harga yang kompetitif.
                            </p>
                        </FadeIn>

                        <ul className="space-y-4">
                            {["Oli Mesin & Gardan (Motul, Shell, Pertamina, dll)", "Ban Tubeless & Tube Type (Michelin, FDR, IRC, Maxxis)", "Kampas Rem, Vanbelt, Roller", "Lampu LED & Aksesoris"].map((item, i) => (
                                <FadeIn key={i} delay={0.3 + (i * 0.1)} direction="left">
                                    <li className="flex items-center gap-3">
                                        <BadgeCheck className="w-6 h-6 text-primary shrink-0" />
                                        <span className="text-foreground font-medium">{item}</span>
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl max-w-md">
                            <Info className="w-5 h-5 text-primary shrink-0" />
                            <p className="text-sm text-foreground">
                                <span className="font-bold">Catatan:</span> Kami tidak menjual suku cadang secara online. Silakan datang langsung ke bengkel untuk pemasangan.
                            </p>
                        </div>
                    </div>

                    {/* Grid Visual Showcase */}
                    <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full">
                        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                            <FadeIn delay={0.2} className="h-auto">
                                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('/ganti-oli.jpg')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <p className="text-white font-bold">Oli Berkualitas</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4} className="h-auto">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('/sparepart-sepeda-motor.jpg')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <p className="text-white font-bold">Suku Cadang Mesin</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <FadeIn delay={0.3} className="h-auto">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('/ban-sepeda-motor.jpg')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <p className="text-white font-bold">Ban Motor</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.5} className="h-auto">
                                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('/kampas-rem-sepeda-motor.jpg')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                                        <p className="text-white font-bold">Kampas Rem</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
