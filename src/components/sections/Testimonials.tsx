import React from "react";
import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
    {
        name: "Budi Santoso",
        role: "Pengguna NMAX",
        content: "Servis di sini sangat memuaskan. Mekanik detail menjelaskan masalah motor saya. Tarikan jadi enteng lagi seperti baru!",
        rating: 5,
    },
    {
        name: "Siti Rahma",
        role: "Pengguna Beat",
        content: "Tempat tunggunya nyaman banget, ada WiFi dan AC. Pengerjaan cepat dan transparan harganya. Rekomen banget!",
        rating: 5,
    },
    {
        name: "Ahmad Rizky",
        role: "Komunitas Motor",
        content: "Udah langganan tune up di sini. Alatnya canggih, ga cuma kira-kira. Hasil diagnosa akurat. Mantap Bengkel SS!",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-32 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Kata Mereka Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SS</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Kepuasan pelanggan adalah prioritas utama kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div
                                className="bg-card border border-border p-8 rounded-2xl relative shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
