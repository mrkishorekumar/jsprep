import { IStringArray } from "@/interface/components";
import React, { Fragment } from "react";

export default function Renderparagraph({ stringArray }: IStringArray) {
  if (stringArray.length === 0) {
    return null;
  } else {
    return (
      <Fragment>
        {stringArray.map((para, index) => {
          return (
            <p className="text-base my-1.5" key={index}>
              {para}
            </p>
          );
        })}
      </Fragment>
    );
  }
}
