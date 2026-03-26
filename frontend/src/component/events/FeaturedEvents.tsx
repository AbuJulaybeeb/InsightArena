"use client";

import { Users, DollarSign, Clock } from "lucide-react";

interface FeaturedEvent {
  id: string;
  tag: string;
  title: string;
  description: string;
  participants: number;
  prizePool: string;
  timeLeft: string;
  image: string;
}

const featuredEvents: FeaturedEvent[] = [
  {
    id: "fe_1",
    tag: "Trading Competition",
    title: "Elite Traders Championship",
    description: "Compete with the best traders globally for a $50,000 prize pool",
    participants: 1342,
    prizePool: "$50,000",
    timeLeft: "2d 14h",
    image: "/assets/elite-traders.png", // Placeholder path
  },
  {
    id: "fe_2",
    tag: "Live Analysis",
    title: "Market Insights Summit",
    description: "Join top analysts discussing crypto market trends and strategies",
    participants: 3421,
    prizePool: "$10,000",
    timeLeft: "5h 25m",
    image: "/assets/market-insights.png",
  },
  {
    id: "fe_3",
    tag: "DeFi Workshop",
    title: "Advanced DeFi Strategies",
    description: "Learn cutting-edge DeFi techniques from industry experts",
    participants: 602,
    prizePool: "$5,000",
    timeLeft: "1d 8h",
    image: "/assets/defi-strategies.png",
  },
];

export default function FeaturedEvents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-2xl tracking-tight">
          Featured This Week
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredEvents.map((event) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#161B30] transition-all hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(8,16,36,0.6)]"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden">
               <div className="absolute inset-0 bg-linear-to-t from-[#161B30] to-transparent z-10" />
               <div className="absolute top-4 left-4 z-20">
                 <span className="px-3 py-1 bg-purple-600/90 text-white text-[10px] font-bold rounded-md uppercase tracking-wider backdrop-blur-sm">
                   {event.tag}
                 </span>
               </div>
               <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center text-gray-500 text-xs">
                 {/* This would be an Image component if images were available */}
                 Featured Event Image
               </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                {event.title}
              </h3>
              <p className="text-[#8D95BD] text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="flex items-center justify-between text-[#8D95BD] text-xs font-medium border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-cyan-500" />
                  <span>{event.participants}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-cyan-500" />
                  <span>{event.prizePool}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-500" />
                  <span>{event.timeLeft}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-[#18C8FF] text-[#08111F] font-bold text-sm rounded-xl hover:bg-[#2ed0ff] transition-all shadow-[0_8px_20px_rgba(24,200,255,0.2)]">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
