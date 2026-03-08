"use client";

import React from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

/**
 * Renders a description string containing [gold]...[/gold], [energy:N], and [star:N] markers
 * into styled React nodes with inline icons.
 */
export default function RichDescription({
  text,
  energyIcon = "colorless",
}: {
  text: string;
  energyIcon?: string;
}) {
  const parts: React.ReactNode[] = [];
  const regex = /(\[gold\].*?\[\/gold\]|\[energy:(\d+)\]|\[star:(\d+)\])/g;
  let lastIndex = 0;
  let matchArr: RegExpExecArray | null;

  while ((matchArr = regex.exec(text)) !== null) {
    if (matchArr.index > lastIndex) {
      parts.push(text.slice(lastIndex, matchArr.index));
    }

    const segment = matchArr[0];
    if (segment.startsWith("[gold]")) {
      const inner = segment.replace(/\[gold\]/g, "").replace(/\[\/gold\]/g, "");
      parts.push(
        <span key={matchArr.index} className="text-[var(--accent-gold)]">
          {inner}
        </span>
      );
    } else if (segment.startsWith("[energy:")) {
      const count = parseInt(matchArr[2]);
      const icons = [];
      for (let i = 0; i < count; i++) {
        icons.push(
          <img
            key={i}
            src={`${API_BASE}/static/images/icons/${energyIcon}_energy_icon.png`}
            alt="energy"
            className="inline-block w-4 h-4 align-text-bottom"
            crossOrigin="anonymous"
          />
        );
      }
      parts.push(<span key={matchArr.index}>{icons}</span>);
    } else if (segment.startsWith("[star:")) {
      const count = parseInt(matchArr[3]);
      const icons = [];
      for (let i = 0; i < count; i++) {
        icons.push(
          <img
            key={i}
            src={`${API_BASE}/static/images/icons/star_icon.png`}
            alt="star"
            className="inline-block w-4 h-4 align-text-bottom"
            crossOrigin="anonymous"
          />
        );
      }
      parts.push(<span key={matchArr.index}>{icons}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
