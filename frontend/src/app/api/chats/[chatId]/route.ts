import { db } from "@/lib/prisma";

export async function GET(req: Request, { params,}: {params: {chatId:string}}) {
    const chatId = params.chatId
    
    console.log("GET CHAT MESSAGE")
    console.log(chatId);
    const data = await db.chatMessageHistory.findMany({
        where: {
            chatId: parseInt(chatId)
        },
    })
    console.log(data)

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request, { params,}: {params: {chatId:string}}) {
    console.log("POST MESSAGE")
    console.log(params.chatId)

    const messageBody = JSON.parse(await req.text())
    console.log(messageBody)
    const newMessage = await db.chatMessageHistory.create({
        data: {
            chatId: parseInt(params.chatId),
            msgContent: messageBody.msgContent,
            msgSender: messageBody.msgSender,
        }
    })
    return new Response(JSON.stringify(newMessage))
}

export async function DELETE(req: Request, {params,}: {params:{chatId:string}}) {
    console.log("DELETE CURRENT CHAT")
    // console.log(params)
    console.log(params.chatId)

    const deleteChat = await db.chat.delete( {
        where: {
            chatId: parseInt(params.chatId),           
        }
    })
    return new Response(JSON.stringify(deleteChat))
}