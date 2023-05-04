import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export async function GET(req: Request) {
    const data = db.chat.findFirst()

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST API")
    // const session = getServerSession();
    const newChat = db.chat.create({
        data: {
            topic: "New Topic",
            UserChats: {
                create: {
                    userId: "clh7d9gwc0000ulpc40fvq2qa"
                }
            }
        }
    })
    const question = db.qnADataset.findFirst()
    console.log(JSON.stringify(question))
    console.dir(question, {depth:null})
    return new Response(JSON.stringify(newChat))
}