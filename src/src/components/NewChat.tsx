"use client"

import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function NewChat() {
  const router = useRouter();

    const createNewChat = async() => {
        const data = await fetch('/api/chats', {
          method: "POST",
        })
        console.log(data)
        const parsedData = await data.json()
        console.log(parsedData)
        
        console.log("New Chat Created")
        router.push(`/chat/${parsedData.chatId}`)
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