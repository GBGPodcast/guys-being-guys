import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"),title:{default:"Guys Being Guys — Real conversations. No filters.",template:"%s | Guys Being Guys"},description:"Conversations, stories, and perspectives with Kaspar, Mo, and their guests.",openGraph:{title:"Guys Being Guys",description:"Real conversations. No filters.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
