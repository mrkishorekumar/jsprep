import { GetHomePageDataResponse, HomeJson } from "@/interface/api";
import type { NextApiRequest, NextApiResponse } from "next";
import HomeData from "./database/home.json";

export default function gethomepagedatahandler(
  req: NextApiRequest,
  res: NextApiResponse<GetHomePageDataResponse>,
) {
  try {
    res.status(200).json({ success: true, data: HomeData as HomeJson });
  } catch {
    res.status(500).json({ success: false });
  }
}
