import { db } from "@/lib/prisma";

export async function GET(req: Request) {
    const data = db.chat.findFirst()

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST API")
    // const session = getServerSession();
    
    const newChat = await db.chat.create({
        data: {
            topic: "CONTOH-TOPIC",
        }
    })
    // const question = db.qnADataset.findFirst()
    // console.log(JSON.stringify(question))
    // console.dir(question, {depth:null})
    return new Response(JSON.stringify(newChat))
}