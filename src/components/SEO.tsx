import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from "../config/site";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  /** URL path only, e.g. `/cashless-insurance` or `/ContactUs` */
  path?: string;
  /** Full URL or site-relative path to share image */
  image?: string;
  ogType?: "website" | "article";
  /** Use for login / draft pages */
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  path = "/",
  image,
  ogType = "website",
  noindex = false,
}) => {
  const canonical = absoluteUrl(path);
  const imageUrl =
    image && (image.startsWith("http://") || image.startsWith("https://"))
      ? image
      : image
        ? absoluteUrl(image.startsWith("/") ? image : `/${image}`)
        : DEFAULT_OG_IMAGE;

  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-PB" />
      <meta name="geo.placename" content="Pathankot, Punjab, India" />

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="en-in" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
