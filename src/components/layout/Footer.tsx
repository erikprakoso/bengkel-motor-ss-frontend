
import React from "react";
import { Facebook, Instagram, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary">SS</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-foreground">Bengkel Motor</span>
                                <span className="text-xs text-muted-foreground tracking-widest uppercase">Specialist Service</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Solusi perawatan motor terpercaya dengan mekanik berpengalaman dan pengerjaan teliti agar performa motor Anda selalu prima.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-6">Navigasi</h3>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Layanan</a></li>
                            <li><a href="#spareparts" className="text-muted-foreground hover:text-primary transition-colors">Suku Cadang</a></li>
                            <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-6">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>Nglawu, Tirem, Brati, Kabupaten Grobogan, Jawa Tengah 58153</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+62 838 3818 5659</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                <span>Setiap Hari: 07:00 - 16:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-foreground mb-6">Sosial Media</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/bengkelmotorss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com/bengkelmotorss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Bengkel Motor SS. Hak Cipta Dilindungi.
                </div>
            </div>
        </footer>
    );
}
