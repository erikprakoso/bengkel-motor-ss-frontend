import React from "react";
import { ClipboardList, Search, Wrench, Gauge, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Process() {
    const steps = [
        {
            icon: <ClipboardList className="w-8 h-8 text-primary font-bold" />,
            title: "Pendaftaran",
            description: "Daftarkan motor Anda di meja resepsionis atau booking via WhatsApp.",
        },
        {
            icon: <Search className="w-8 h-8 text-secondary font-bold" />,
            title: "Inspeksi & Diagnosa",
            description: "Mekanik kami memeriksa kondisi motor dan menyampaikan estimasi biaya.",
        },
        {
            icon: <Wrench className="w-8 h-8 text-primary font-bold" />,
            title: "Pengerjaan",
            description: "Proses servis dilakukan dengan alat lengkap dan sparepart sesuai persetujuan.",
        },
        {
            icon: <Gauge className="w-8 h-8 text-secondary font-bold" />,
            title: "Test Drive & QC",
            description: "Pengecekan akhir untuk memastikan masalah telah teratasi sepenuhnya.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-primary font-bold" />,
            title: "Penyerahan",
            description: "Motor diserahkan kembali dalam kondisi prima beserta nota garansi servis.",
        },
    ];

    return (
        <section id="process" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Alur Servis <span className="text-primary">Transparan</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Kami memastikan setiap langkah pengerjaan jelas dan terukur demi kepuasan Anda.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={index * 0.15}>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {step.icon}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm border-2 border-background">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
