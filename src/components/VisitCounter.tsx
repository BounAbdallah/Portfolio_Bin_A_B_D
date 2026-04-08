"use client";
import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_visits");
    const current = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem("portfolio_visits", String(current));

    fetch("https://api.countapi.xyz/hit/bounabdallah-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setCount(data?.value ?? current))
      .catch(() => setCount(current));
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-surface border border-on-surface/12 px-3 py-2">
      <span className="text-[10px] font-mono text-on-surface/30 uppercase tracking-widest">
        {count.toLocaleString()} visite{count > 1 ? "s" : ""}
      </span>
    </div>
  );
}
