import { NextApiRequest, NextApiResponse } from "next";
import animalsJson from "@/animals.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {

    const id = Number(req.query.id);

    if (req.method === "GET") {
        const animal = animalsJson.find(animal => animal.id === id)
        if (animal) {
            res.status(200).json(animal);
        }
        else {
            res.status(404).json({ "message": "Animal not found" });
        }
        
    }
    else {
        res.status(405).json({ "message": "Only GET requests allowed!" });
    }
}

export default handler;