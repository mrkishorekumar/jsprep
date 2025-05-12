import { HomePageContent } from "./api";

export interface IRenderHomePage {
  html: HomePageContent[];
}

export interface IRenderHeading {
  heading: string;
}

export interface IStringArray {
  stringArray: string[];
}

export interface IRenderLinkList {
  linkList: {
    url: string;
    label: string;
  }[];
}
