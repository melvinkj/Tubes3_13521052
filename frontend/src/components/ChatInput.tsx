"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import Agent from "../../backend/algo/agent.js";

type Props = {
    chatId: number;
}

function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("");

    const sendMessage = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return;

        const input = prompt.trim();
        console.log(input);
        
        setPrompt("");

        // saves user's question message
        const dataUser = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
            method: "POST",
            body: JSON.stringify({
                msgContent: input,
                msgSender: "user",
            })
          })
        
        let agent = new Agent();

        // server do response processing
        // chore: server auto answer

        // dummy response
        const dataSystem = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
            method: "POST",
            body: JSON.stringify({
                msgContent: `${agent.process(input, true)}`,
                msgSender: "system",
            })
          })

    }
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={e => sendMessage(e)} className="p-5 space-x-5 flex">
            <input 
                className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                // disabled={!session}
                value={prompt}
                onChange = {(e) => setPrompt(e.target.value)}
                type="text" 
                placeholder="Type your message here..."
            />

            {/* <button disabled={!prompt || !session} type="submit" */}
            <button disabled={!prompt} type="submit"
                className="bg-green-300 hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:text-gray-300 disabled:cursor-not-allowed">
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            </button>
        </form>

        <div>
            {/* ModelSelection */}
        </div>
    </div>
  )
}

export default ChatInput