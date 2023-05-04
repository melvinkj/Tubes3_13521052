'use client'

import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export async function GET(req: Request) {
    const data = db.chat.findFirst()

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST API")
    const {data: session} = useSession();
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
    return new Response(JSON.stringify(newChat))
}