"use client"

import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
// import prisma from "../lib/prisma"
import { db } from "../lib/prisma";

function NewChat() {
  const router = useRouter();
  // const {data: session} = useSession();

    const createNewChat = async() => {
        // const doc = await add();
        // const data = await db.chat.findFirst()
        const data = await fetch('api/chats', {
          method: "POST"
        })
    }
  // Execute createNewChat only on the client-side
  if (typeof window !== 'undefined') {
    return (
      <div onClick={createNewChat} className="border border-gray-700 items-center chatRow">
          <PlusIcon className="h-4 w-4"/>
          <p>New Chat</p>
      </div>
    )
  } else {
    return null;
  }
}

export default NewChat