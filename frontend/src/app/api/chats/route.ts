import { db } from "@/lib/prisma";

export async function GET(req: Request) {
    console.log("GET CHAT")
    const data = await db.chat.findMany();

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST API")
    
    const newChat = await db.chat.create({
        data: {
            topic: "New Topic",
        }
    })
    return new Response(JSON.stringify(newChat))
}