export interface GetHomePageDataResponse {
  success: boolean;
  data?: HomeJson;
}

export interface HomePageContent {
  heading: string;
  content: (
    | {
        type: "bullet-points";
        data: string[];
      }
    | {
        type: "paragraph";
        data: string[];
      }
    | {
        type: "links";
        data: {
          url: string;
          label: string;
        }[];
      }
  )[];
}

export interface HomeJson {
  "page-title": string;
  "meta-description": string;
  body: HomePageContent[];
}
