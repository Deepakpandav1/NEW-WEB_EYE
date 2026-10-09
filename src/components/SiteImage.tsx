import React from "react";
import dimensions from "../utils/imageDimensions.json";

/** Preserve source detail and reserve image space before it downloads. */
export default function SiteImage({
  src, alt, loading, decoding = "async", width, height, fetchPriority, ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const size = src ? (dimensions as Record<string, number[]>)[src] : undefined;
  return <img {...props} src={src} alt={alt} width={width ?? size?.[0]} height={height ?? size?.[1]}
    loading={loading ?? (fetchPriority === "high" ? "eager" : "lazy")}
    decoding={decoding} fetchPriority={fetchPriority} />;
}
