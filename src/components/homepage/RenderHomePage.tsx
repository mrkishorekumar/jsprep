import { IRenderHomePage } from "@/interface/components";
import React, { Fragment } from "react";
import RenderHeading from "../common/RenderHeading";
import RenderBulletPoints from "../common/RenderBulletPoints";
import Renderparagraph from "../common/Renderparagraph";
import RenderLinkList from "../common/RenderLinkList";

export default function RenderHomePage({ html }: IRenderHomePage) {
  return (
    <Fragment>
      {html.map((val, index) => {
        return (
          <Fragment key={index}>
            <RenderHeading heading={val.heading} />
            {val.content.map((content, contentIndex) => {
              return (
                <Fragment key={contentIndex}>
                  {content.type === "bullet-points" ? (
                    <RenderBulletPoints stringArray={content.data} />
                  ) : content.type === "paragraph" ? (
                    <Renderparagraph stringArray={content.data} />
                  ) : content.type === "links" ? (
                    <RenderLinkList linkList={content.data} />
                  ) : null}
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </Fragment>
  );
}
