import { getCachedGlobal } from "@/utilities/getGlobals"
import Link from "next/link"
import React from "react"
import type { Footer } from "@/payload-types"
import { CMSLink } from "@/components/Link"
import { Logo } from "@/components/Logo/Logo"

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)()
  const navItems = footerData?.navItems || []
  const products = ["Sesame Seeds", "Sesame Oil", "Olive Oil", "Baobab", "Groundnuts", "Hibiscus", "Gum Arabic"]
  const markets = ["North America", "North Africa", "Europe", "Asia"]

  return (
    <footer className="mt-auto bg-black border-t border-[#6BBF3E]/30 text-white">
      <div className="container py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/"><Logo /></Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium organic agricultural products, sustainably sourced from North Africa and Sudan, delivered to tables worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#6BBF3E] text-xs font-semibold tracking-widest uppercase mb-1">Our Products</h4>
            {products.map((p) => (
              <span key={p} className="text-gray-400 text-sm hover:text-[#6BBF3E] transition-colors cursor-pointer">{p}</span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#6BBF3E] text-xs font-semibold tracking-widest uppercase mb-1">Markets</h4>
            {markets.map((m) => (
              <span key={m} className="text-gray-400 text-sm">{m}</span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#6BBF3E] text-xs font-semibold tracking-widest uppercase mb-1">Company</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => (
                <CMSLink className="text-gray-400 text-sm hover:text-[#6BBF3E] transition-colors" key={i} {...link} />
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-[#6BBF3E]/20 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">2025 Karmakoul Ltd. All rights reserved.</p>
          <p className="text-[#6BBF3E] text-xs tracking-widest uppercase">From fields to tables, Sustainably yours</p>
        </div>
      </div>
    </footer>
  )
}
