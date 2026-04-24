"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "واجهات تطبيقات", category: "App UI", image: "/portfolio/app andrid.png", span: "md:col-span-1 md:row-span-2" },
  { id: 2, title: "مواقع شركات", category: "Web Design", image: "/portfolio/quip.png", span: "md:col-span-2 md:row-span-1" },
  { id: 3, title: "أتمتة العمليات", category: "n8n Automation", image: "/portfolio/n8n.jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "أنظمة المطاعم", category: "QR Menu", image: "/portfolio/روح.png", span: "md:col-span-1 md:row-span-1" },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            نظرة أعمق على أعمالنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            جزء من المشاريع التي قمنا بتنفيذها وتصميمها
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group bg-muted/20 border border-border/50 cursor-crosshair ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-bold tracking-wider uppercase mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
