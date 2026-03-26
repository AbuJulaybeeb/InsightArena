"use client";

import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import { CheckCircle2 } from "lucide-react";

export interface ICompetition {
  id: string;
  tag: string;
  prizePool: number;
  title: string;
  features: string[];
  currentParticipants: number;
  maxParticipants: number;
  endTime: string; // ISO Date string
}

export function CompetitionCard({ competition }: { competition: ICompetition }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });
  const [progress, setProgress] = useState(0);

  // Calculate Progress
  useEffect(() => {
    const ratio = (competition.currentParticipants / competition.maxParticipants) * 100;
    // Slight delay for animation effect on mount
    const timer = setTimeout(() => setProgress(ratio), 100);
    return () => clearTimeout(timer);
  }, [competition]);

  // Countdown Logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(competition.endTime).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(timer);
  }, [competition.endTime]);

  return (
    <div className="flex flex-col rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      {/* Top Tag */}
      <div className="mb-4 flex items-center">
        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          {competition.tag}
        </span>
      </div>

      {/* Prize Pool & Title */}
      <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-cyan-400">
        ${competition.prizePool.toLocaleString()}
      </h2>
      <h3 className="mb-6 text-xl font-bold text-white">{competition.title}</h3>

      {/* Feature Bullets */}
      <ul className="mb-8 space-y-3">
        {competition.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-400">
            <CheckCircle2 className="mr-3 h-4 w-4 text-cyan-500" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span className="text-gray-400">Participants</span>
            <span className="text-cyan-400">
              {competition.currentParticipants} / {competition.maxParticipants}
            </span>
          </div>
          <Progress.Root
            className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800"
            value={progress}
          >
            <Progress.Indicator
              className="h-full w-full bg-cyan-500 transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </Progress.Root>
        </div>

        {/* Mega Countdown */}
        <div className="mb-6 rounded-xl bg-black/50 p-4 border border-gray-800/50">
          <div className="flex justify-between text-center">
            <div className="flex flex-col">
              <span className="text-3xl font-black font-mono text-white">{timeLeft.days}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Days</span>
            </div>
            <span className="text-3xl font-black text-gray-700">:</span>
            <div className="flex flex-col">
              <span className="text-3xl font-black font-mono text-white">{timeLeft.hours}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Hours</span>
            </div>
            <span className="text-3xl font-black text-gray-700">:</span>
            <div className="flex flex-col">
              <span className="text-3xl font-black font-mono text-white">{timeLeft.mins}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Mins</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full rounded-lg bg-cyan-500 py-3.5 font-bold text-black transition-colors hover:bg-cyan-400 active:bg-cyan-600">
          Enter Competition
        </button>
      </div>
    </div>
  );
}
