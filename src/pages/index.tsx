import Announcement from "@/components/common/Announcement";
import Footer from "@/components/common/Footer";
import MetaTag from "@/components/common/MetaTag";
import RenderHeading from "@/components/common/RenderHeading";
import Renderparagraph from "@/components/common/Renderparagraph";
import RenderHomePage from "@/components/homepage/RenderHomePage";
import { GetHomePageDataResponse } from "@/interface/api";
import { IHomePage } from "@/interface/page";
import { font } from "@/utils/font";
import { GetStaticProps } from "next";
import React, { Fragment, useState } from "react";

export default function HomePage({ html, description, title }: IHomePage) {
  const [announcement, setAnnouncement] = useState(true);

  return (
    <Fragment>
      <MetaTag title={title} description={description} />
      {announcement && <Announcement close={() => setAnnouncement(false)} />}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <section className={`max-w-4xl mx-auto text-left ${font.className}`}>
          <RenderHeading heading={title} />
          <Renderparagraph stringArray={[description]} />
          <RenderHomePage html={html} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res: GetHomePageDataResponse = await fetch(
      "http://localhost:3000/api/gethome",
    ).then((res) => res.json());

    if (!res.success) {
      return { notFound: true };
    }

    return {
      props: {
        title: res?.data?.["page-title"] ?? null,
        description: res?.data?.["meta-description"] ?? null,
        html: res?.data?.body ?? [],
      },
      revalidate: 43200,
    };
  } catch {
    return { notFound: true };
  }
};
