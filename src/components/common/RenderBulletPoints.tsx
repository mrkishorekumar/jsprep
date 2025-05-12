import { IStringArray } from "@/interface/components";
import React from "react";

export default function RenderBulletPoints({ stringArray }: IStringArray) {
  if (stringArray.length === 0) {
    return null;
  } else {
    return (
      <ul className="my-4 list-disc list-inside">
        {stringArray.map((points, index) => {
          return (
            <li className="my-1.5" key={index}>
              {points}
            </li>
          );
        })}
      </ul>
    );
  }
}
