"use client";
import NewChat from "./NewChat"
import AlgorithmSelection from "./AlgorithmSelection"
import ChatRow from "./ChatRow";
import { useLayoutEffect, useState } from "react";

function SideBar() {

    const [messages, setMessages] = useState<any[]>([]);

    useLayoutEffect(
        () => {
            const initMessages = async () => {
                const response = await fetch('/api/chats', {
                    method: "GET",
                });
                console.log("Init messages");
                const message = await response.json();
                setMessages(message)
            }

            initMessages();
        }, [setMessages]
    )
  return (
    <div className="flex flex-col h-screen p-2 space-y-2">
        <NewChat/>        
        <div className="flex-1 overflow-y-auto">                       
            {messages.map(chat => (<ChatRow chatId={chat.chatId} topic={chat.topic}/>))}
        </div>
        <div className="p-4 rounded-lg border flex items-center justify-center space-x-3 font-extrabold">
                     GIGAChat
        </div>
    </div>
  )
}

export default SideBar