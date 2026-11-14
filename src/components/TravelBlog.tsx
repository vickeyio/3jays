import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/homepageMedia";

export function TravelBlog() {
  return (
    <section id="blog" aria-labelledby="travel-blog-heading" className="bg-safari-surface/50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-safari-gold">Travel journal</p>
          <h2 id="travel-blog-heading" className="mt-4 max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-5xl">Stories to shape your next journey.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Practical ideas, honest inspiration and places worth slowing down for across East Africa.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={(index % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-safari-line bg-card transition-all duration-500 hover:-translate-y-1 hover:border-safari-gold/40 hover:shadow-[0_30px_60px_-20px_rgb(60_40_20/0.18)]">
                <div className="relative overflow-hidden">
                  <img src={post.photo.src} alt={post.photo.alt} width={1600} height={1067} loading="lazy" decoding="async" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="aspect-3/2 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase text-safari-gold">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-1.5 normal-case text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-foreground">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  <Link to={post.to} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-safari-gold transition-colors hover:text-foreground">Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}