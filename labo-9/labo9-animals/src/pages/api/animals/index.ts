import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import animalsJson from "@/animals.json";
import { Animal } from "@/types";

// In-memory store (resets on every server restart)
//let animals: Animal[] = [...animalsJson];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        res.status(200).json(animalsJson);
    }/*
    else if (req.method === "POST") {
        const { name, imglink } = req.body;

        if (!name || !imglink) {
            return res.status(400).json({ message: "Missing 'name' or 'imglink' in request body." });
        }

        const newAnimal: Animal = {
            id: animals.length > 0 ? animals[animals.length - 1].id + 1 : 1,
            name,
            imglink
        };

        animals.push(newAnimal);

        res.status(201).json({ message: "Animal added.", animal: newAnimal });
    }*/
    else {
        res.status(405).json({ "message": "Only GET requests allowed!" });
    }
}

export default handler;