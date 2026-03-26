"use client";

import Link from "next/link";
import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-cyan-400 font-black text-2xl tracking-tighter">
              InsightArena
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              {["Platform", "Events", "Competitions", "Leaderboard", "Resources"].map((item) => (
                <Link
                  key={item}
                  href={item === "Events" ? "/events" : "/"}
                  className={`text-sm font-bold transition-colors ${
                    item === "Events" ? "text-cyan-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-gray-400">
              <Search className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
              <Bell className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
            </div>
            <button className="bg-transparent border border-cyan-500/50 hover:bg-cyan-500 hover:text-black text-cyan-400 px-6 py-2 rounded-lg font-bold transition-all text-sm">
              Connect Wallet
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
