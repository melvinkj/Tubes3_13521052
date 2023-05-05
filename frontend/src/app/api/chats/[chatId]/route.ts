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

// export async function DELETE(req: Request) {
//     console.log("DELETE API")

//     const deleteChat = await db.chat.delete( {
//         where: {
//             chatId: 1,           
//         }
//     })
// }

export async function DELETE(req: Request, {params,}: {params:{chatId:string}}) {
    console.log("DELETE CURRENT CHAT")
    console.log(params)
    console.log(params.chatId)

    const deleteChat = await db.chat.delete( {
        where: {
            chatId: parseInt(params.chatId),           
        }
    })
    return new Response(JSON.stringify(deleteChat))
}