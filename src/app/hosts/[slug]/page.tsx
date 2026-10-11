import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPersonBySlug } from "@/lib/data";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=await getPersonBySlug(slug);return {title:p?.name??"Host"}}
export default async function HostPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=await getPersonBySlug(slug);if(!p||p.role==="guest")notFound();return <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24"><Link href="/hosts" className="text-sm font-semibold text-neutral-500">← All hosts</Link><p className="mt-12 text-xs font-bold uppercase tracking-[.2em] text-neutral-500">Host profile</p><h1 className="mt-3 text-7xl font-black tracking-[-.08em] sm:text-9xl">{p.name}.</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">{p.bio}</p><a href="https://www.youtube.com/@GBGPodcastt" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-black px-5 py-3 text-sm font-bold text-white">Watch the show ↗</a></section>}
