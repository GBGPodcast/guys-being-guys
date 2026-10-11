import type { Metadata } from "next";
import { getEpisodes } from "@/lib/data";
import { EpisodeCard } from "@/components/episode-card";
export const metadata:Metadata={title:"Episodes"};
export default async function EpisodesPage(){const episodes=await getEpisodes();return <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"><p className="text-xs font-bold uppercase tracking-[.18em] text-neutral-500">The archive</p><h1 className="mt-3 text-6xl font-black tracking-[-.08em] sm:text-8xl">All episodes.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">Honest conversations, interesting guests, and stories that stay with you.</p><div className="mt-12 grid gap-8 md:grid-cols-3">{episodes.map((e,i)=><EpisodeCard key={e.id} episode={e} index={i}/>)}</div></section>}
