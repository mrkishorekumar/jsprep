import { IRenderHeading } from "@/interface/components";
import { font } from "@/utils/font";
import React from "react";

export default function RenderHeading({ heading }: IRenderHeading) {
  if (heading.length === 0) {
    return null;
  } else {
    return (
      <h1 className={`my-4 text-xl font-semibold ${font.className}`}>
        {heading}
      </h1>
    );
  }
}
