import { db } from "@/lib/prisma"

export async function DELETE(req: Request, {params,}: {params:{question:string}}) {
    console.log("DELETE A QUESTION-ANSWER")
    console.log(params.question)

    const deleteQA = await db.qnADataset.delete( {
        where: {
            question: params.question,           
        }
    })
    return new Response(JSON.stringify(deleteQA))
}
