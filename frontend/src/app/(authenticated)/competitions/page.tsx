"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CompetitionsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/events");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-400">Competitions have moved to the new Events page.</p>
        <a href="/events" className="mt-6 inline-block text-cyan-400 hover:text-cyan-300 underline">
          Click here if you are not redirected
        </a>
      </div>
    </div>
  );
}