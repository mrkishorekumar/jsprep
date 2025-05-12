import Head from "next/head";
import React from "react";

interface IMetaTag {
  title?: string;
  description?: string;
}

export default function MetaTag({ title, description }: IMetaTag) {
  const fallbackTitle = "Ace Your JavaScript Interview - JSPrep.in";
  const fallbackDescription =
    "Prepare for JavaScript interviews with curated questions, coding challenges, and detailed solutions. Perfect for beginners and experienced developers alike.";

  return (
    <Head>
      <title>{title ?? fallbackTitle}</title>
      <meta name="description" content={description ?? fallbackDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://jsprep.rigial.com/"></link>
      <link rel="icon" type="image/x-icon" href="./jsprep.webp"></link>

      <meta property="og:title" content={title ?? fallbackTitle} />
      <meta
        property="og:description"
        content={description ?? fallbackDescription}
      />
      <meta property="og:url" content="https://jsprep.rigial.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://jsprep.rigial.com/jsprep.webp"
      />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="author" content="M R Kishore Kumar" />
      <meta name="keywords" content="jsprep" />

      {/* Language and Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
