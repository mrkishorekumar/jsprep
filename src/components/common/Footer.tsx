import { font } from "@/utils/font";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerLinks = [
    {
      label: "Terms & Conditions",
      link: "/terms",
    },
    {
      label: "Privacy Policy",
      link: "/privacy",
    },
    {
      label: "About",
      link: "/about",
    },
  ];

  return (
    <footer
      className={`bg-white mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 ${font.className}`}
    >
      <div className="border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <Link
            href={"https://rigial.com/"}
            target="_blank"
          >{`Copyright © ${new Date().getFullYear()}. All rights reserved - Rigial.com`}</Link>
          {footerLinks.map((val, index) => (
            <Link
              className="transition hover:opacity-75"
              href={val.link}
              key={index}
            >
              {val.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
