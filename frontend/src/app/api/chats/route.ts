import { db } from "@/lib/prisma";

export async function GET(req: Request) {
    console.log("GET CHAT")
    const data = await db.chat.findMany();
    // console.log(data)

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST API")
    // const session = getServerSession();
    
    const newChat = await db.chat.create({
        data: {
            topic: "New Topic",
        }
    })
    // const question = db.qnADataset.findFirst()
    // console.log(JSON.stringify(question))
    // console.dir(question, {depth:null})
    return new Response(JSON.stringify(newChat))
}

// export async function DELETE(req: Request, {params,}: {params:{chat_id:number}}) {
//     console.log("DELETE API")

//     const deleteChat = await db.chat.delete( {
//         where: {
//             chatId: params.chat_id,           
//         }
//     })
//     return new Response(JSON.stringify(deleteChat))
// }