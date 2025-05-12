import { IRenderLinkList } from "@/interface/components";
import Link from "next/link";
import React, { Fragment } from "react";

export default function RenderLinkList({ linkList }: IRenderLinkList) {
  if (linkList.length === 0) {
    return null;
  } else {
    return (
      <Fragment>
        {linkList.map((link, index) => {
          return (
            <Link
              className="block my-1.5 text-blue-950 underline"
              href={link.url}
              key={index}
            >
              {link.label}
            </Link>
          );
        })}
      </Fragment>
    );
  }
}
