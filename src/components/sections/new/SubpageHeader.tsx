import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function SubpageHeader({ title, description }: Props) {
  return (
    <section className="w-full pt-28 pb-16 px-4 bg-primary/5 border-b border-border/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4 group">
          <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          العودة للرئيسية
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
