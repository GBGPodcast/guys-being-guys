import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPeople } from "@/lib/data";
export const metadata:Metadata={title:"Hosts"};
export default async function HostsPage(){const hosts=await getPeople("host");return <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"><p className="text-xs font-bold uppercase tracking-[.18em] text-neutral-500">Meet the voices</p><h1 className="mt-3 text-6xl font-black tracking-[-.08em] sm:text-8xl">The hosts.</h1><div className="mt-12 grid gap-5 sm:grid-cols-2">{hosts.map((p,i)=><Link key={p.id} href={`/hosts/${p.slug}`} className={`flex min-h-72 flex-col justify-between rounded-[2rem] p-8 ${i%2?"bg-neutral-900 text-white":"bg-[#d9f28a]"}`}><span className="text-xs font-bold uppercase tracking-[.2em]`}>Host / 0{i+1}</span><div><h2 className="text-5xl font-black tracking-[-.08em]">{p.name}</h2><p className="mt-3 max-w-md text-sm leading-6 opacity-70">{p.bio}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Meet {p.name} <ArrowUpRight size={16}/></span></div></Link>)}</div></section>}
