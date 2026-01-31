import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Info Section */}
                    <div className="flex-1 space-y-8">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                Kunjungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Bengkel</span> Kami
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Jangan biarkan performa motor Anda menurun. Segera lakukan perawatan berkala di Bengkel Motor SS untuk pengalaman berkendara yang lebih aman dan nyaman.
                            </p>
                        </FadeIn>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-1">Alamat</h3>
                                    <p className="text-muted-foreground">Nglawu, Tirem, Brati, Kabupaten Grobogan, Jawa Tengah 58153</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-1">Jam Operasional</h3>
                                    <p className="text-muted-foreground">Setiap Hari: 07:00 - 16:00 WIB</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-1">Kontak</h3>
                                    <p className="text-muted-foreground mb-2">WhatsApp: +62 838 3818 5659</p>
                                    <Button
                                        size="sm"
                                        className="gap-2"
                                        onClick={() => window.open("https://wa.me/6283838185659", "_blank")}
                                    >
                                        Chat Sekarang
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="flex-1 h-[400px] lg:h-auto min-h-[400px] bg-muted rounded-3xl overflow-hidden shadow-2xl border border-border relative group">
                        <FadeIn delay={0.2} className="w-full h-full">
                            {/* Placeholder for map */}
                            <div className="absolute inset-0 bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground font-medium flex flex-col items-center gap-2">
                                    <MapPin className="w-8 h-8" />
                                    Google Maps Frame Area
                                </span>
                            </div>

                            {/* Embed Overlay (Simulated) */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.49051566193012!2d110.90808237912809!3d-7.027116885055486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70b7fcada27447%3A0x7c2bcf16fac9b41c!2sSS%20motor!5e0!3m2!1sen!2sid!4v1769823676178!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                            />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
