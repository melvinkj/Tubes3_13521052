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
                console.log(response);
                const message = await response.json();
                console.log(message)
                setMessages(message)
            }

            initMessages();
        }, [setMessages]
    )
  return (
    <div className="p-2 flex flex-col h-screen overflow-hidden">
        <div className="flex-1 space-y-4 ">
            <NewChat/>
            <div className="h-[610px] overflow-y-auto">
                {/* Map through the chat rows */}
                
                {messages.map(chat => (<ChatRow chatId={chat.chatId} topic={chat.topic}/>))}
            </div>
            <div className="space-y-4 p-2 rounded-lg border">
                <div className="place-items-center">
                    <AlgorithmSelection/>
                </div>
                <div className="flex items-center justify-center space-x-3 font-extrabold">
                    GIGAChat
                </div>
            </div>
            
        </div>            
    </div>
  )
}

export default SideBar