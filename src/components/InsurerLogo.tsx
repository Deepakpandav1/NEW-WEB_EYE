import React, { useMemo, useState } from "react";

function initialsFromName(name: string): string {
  const skip = new Set([
    "the",
    "and",
    "of",
    "limited",
    "company",
    "general",
    "insurance",
    "health",
    "allied",
  ]);
  const words = name
    .split(/[\s&,]+/)
    .map((w) => w.replace(/\./g, ""))
    .filter((w) => w.length > 0 && !skip.has(w.toLowerCase()));
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return "IN";
}

const faviconUrl = (domain: string, size: number) =>
  `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;

type Props = {
  name: string;
  logoDomain: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { box: "h-10 w-10", img: 36, text: "text-[10px]" },
  md: { box: "h-12 w-12 sm:h-14 sm:w-14", img: 48, text: "text-xs" },
  lg: { box: "h-16 w-16", img: 64, text: "text-sm" },
};

const InsurerLogo: React.FC<Props> = ({
  name,
  logoDomain,
  size = "md",
  className = "",
}) => {
  const [failed, setFailed] = useState(false);
  const { box, img, text } = sizeMap[size];
  const initials = useMemo(() => initialsFromName(name), [name]);
  const src = faviconUrl(logoDomain, img);

  if (failed) {
    return (
      <div
        className={`${box} rounded-lg bg-slate-800 text-slate-100 font-semibold flex items-center justify-center shrink-0 ring-1 ring-slate-700/80 ${text} tracking-tight ${className}`}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`${box} rounded-lg bg-white ring-1 ring-slate-200/90 flex items-center justify-center shrink-0 overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${className}`}
    >
      <img
        src={src}
        alt=""
        width={img}
        height={img}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="object-contain max-h-[65%] max-w-[65%]"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default InsurerLogo;
