import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "The March Group | Thematic VC", description: "Thematic venture capital across precision nutrition, intelligent health, and food & medicine." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
