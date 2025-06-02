// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import philosophers from "@/philosophers-data.json";
import { Philosopher } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Philosopher[]>,
) {
  res.status(200).json(philosophers);
}
