import { db } from "@/lib/prisma";


export async function GET(req: Request) {
    console.log("GET ALL QUESTION-ANSWER")
    const data = await db.qnADataset.findMany()
    console.log(data)

    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    console.log("POST NEW QUESTION-ANSWER")

    const questionAnswer = JSON.parse(await req.text())
    const newQA = await db.qnADataset.create({
        data: {
            question: questionAnswer.question,
            answer: questionAnswer.answer,
        }
    })
    return new Response(JSON.stringify(newQA))
}

export async function PUT(req: Request) {
    console.log("UPDATE A QUESTION-ANSWER")

    const questionAnswer = JSON.parse(await req.text())
    const updateQA = await db.qnADataset.update( {
        where: {
            question: questionAnswer.question,           
        },
        data: {
            answer: questionAnswer.answer,
        }
    })
    return new Response(JSON.stringify(updateQA))
}
