"use client";

<<<<<<< feat/93-open-competitions-cards
import React from "react";
import Head from "next/head";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import UnifiedBackground from "@/component/Homepage/UnifiedBackground";
import { CompetitionCard, ICompetition } from "@/component/competitions/CompetitionCard";
import { Search, ChevronDown, Filter } from "lucide-react";

// Mock Data for "Featured This Week"
const FEATURED_EVENTS = [
  {
    id: "feat_1",
    tag: "Trading Competition",
    title: "Elite Traders Championship",
    description: "Compete with the best traders globally for a $50,000 prize pool.",
    stats: { participants: 1247, prize: "$58,000", time: "2d 14h" },
    image: "/feat1.png", // Placeholder
  },
  {
    id: "feat_2",
    tag: "Live Analysis",
    title: "Market Insights Summit",
    description: "Join top analysts discussing crypto market trends and strategies.",
    stats: { participants: 3421, prize: "$10,000", time: "5h 23m" },
    image: "/feat2.png", // Placeholder
  },
  {
    id: "feat_3",
    tag: "DeFi Workshop",
    title: "Advanced DeFi Strategies",
    description: "Learn cutting-edge DeFi techniques from industry experts.",
    stats: { participants: 812, prize: "$5,000", time: "1d 8h" },
    image: "/feat3.png", // Placeholder
  },
];

// Mock Data for "Open Competitions" (Moved from competitions/page.tsx)
const OPEN_COMPETITIONS: ICompetition[] = [
  {
    id: "comp_1",
    tag: "Spot Trading",
    prizePool: 100000,
    title: "Quarterly Trading Championship",
    features: ["Minimum 10 trades", "KYC verified", "Portfolio > $1,000"],
    currentParticipants: 847,
    maxParticipants: 1000,
    endTime: new Date(Date.now() + 1075500000).toISOString(),
  },
  {
    id: "comp_2",
    tag: "Futures",
    prizePool: 75000,
    title: "Leverage Masters Contest",
    features: ["Futures experience", "Risk score > 70", "Active for 30 days"],
    currentParticipants: 623,
    maxParticipants: 1000,
    endTime: new Date(Date.now() + 750000000).toISOString(),
  },
];

export default function EventsPage() {
  return (
    <>
      <div className="relative min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
        <UnifiedBackground variant="hero" showParticles={true} opacity={0.4} />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-in fade-in slide-in-from-top-10 duration-1000">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                Public Events & Competitions
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Join live trading competitions, connect with top analysts, and win exclusive rewards.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Browse Events
                </button>
                <button className="px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95">
                  View Competitions
                </button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-16">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-grow w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search events, competitions..."
                    className="w-full bg-[#111111] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto border-b md:border-b-0 border-gray-800 md:border-l md:border-gray-800 md:pl-6">
                  {["All", "Events", "Competitions", "Past"].map((cat) => (
                    <button
                      key={cat}
                      className={`text-sm font-semibold whitespace-nowrap transition-colors ${
                        cat === "All" ? "text-cyan-400" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
=======
import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "events", label: "Events" },
    { id: "competitions", label: "Competitions" },
    { id: "past", label: "Past" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
      {/* Global Network Lines Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-15"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="globalLineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#globalLineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,400 Q400,300 600,400 T1000,400"
            stroke="url(#globalLineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50,600 Q250,500 450,600 T850,600"
            stroke="url(#globalLineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M150,800 Q350,700 550,800 T950,800"
            stroke="url(#globalLineGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 border border-gray-700/30">
              {/* Background SVG Pattern */}
              <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <svg
                  className="w-full h-full opacity-15"
                  viewBox="0 0 1000 1000"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100,200 Q300,100 500,200 T900,200"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M200,400 Q400,300 600,400 T1000,400"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M50,600 Q250,500 450,600 T850,600"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Public Events & Competitions
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Join live trading competitions, connect with top analysts, and
                  win exclusive rewards
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-[#4FD1C5] text-white font-semibold rounded-xl hover:bg-[#3dbdb3] transition">
                    Browse Events
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-xl hover:bg-white/5 transition">
                    View Competitions
                  </button>
                </div>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-[#0f172a] rounded-2xl p-6 border border-gray-700/30">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="flex-1 w-full relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search events, competitions..."
                    className="w-full bg-[#1e293b] text-white pl-12 pr-4 py-3 rounded-xl border border-gray-700/50 focus:border-[#4FD1C5] focus:outline-none transition"
                  />
                </div>

                {/* Tabs */}
                <div className="flex gap-2 bg-[#1e293b] p-1 rounded-xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2 rounded-lg font-medium transition ${
                        activeTab === tab.id
                          ? "bg-[#4FD1C5] text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Filter and Sort */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] text-gray-300 rounded-xl border border-gray-700/50 hover:bg-[#2d3b52] transition">
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] text-gray-300 rounded-xl border border-gray-700/50 hover:bg-[#2d3b52] transition">
>>>>>>> main
                    Most Popular
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

<<<<<<< feat/93-open-competitions-cards
            {/* Featured Section */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
                  Featured This Week
                  <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURED_EVENTS.map((event) => (
                  <div key={event.id} className="group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                    <div className="aspect-[16/10] bg-gray-900 overflow-hidden">
                       <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-gray-700 italic">
                         Image Placeholder
                       </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2.5 py-1 mb-4 rounded-md bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                        {event.tag}
                      </span>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase text-gray-500">Participants</span>
                            <span className="text-sm font-bold">{event.stats.participants}</span>
                         </div>
                         <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase text-gray-500">Prize Pool</span>
                            <span className="text-sm font-bold text-cyan-400">{event.stats.prize}</span>
                         </div>
                         <div className="flex flex-col gap-1 items-end">
                            <span className="text-[10px] uppercase text-gray-500">Ends In</span>
                            <span className="text-sm font-bold">{event.stats.time}</span>
                         </div>
                      </div>
                      <button className="w-full mt-6 py-2.5 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-black font-bold rounded-lg transition-all">
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Open Competitions Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black tracking-tight">Open Competitions</h2>
                <button className="text-sm text-cyan-500 hover:text-cyan-400 font-medium">Limited Time Offers</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {OPEN_COMPETITIONS.map((competition) => (
                  <CompetitionCard key={competition.id} competition={competition} />
                ))}
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
=======
            {/* Events Grid */}
           
          </div>
        </div>

        <Footer />
      </div>
    </div>
>>>>>>> main
  );
}
