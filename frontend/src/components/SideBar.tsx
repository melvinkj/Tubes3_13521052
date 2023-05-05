"use client";
import NewChat from "./NewChat"
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
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1 ">
            <div>
                <NewChat/>
                <div>
                    {/* Algorithm selection */}
                </div>

                <div>
                    {/* Map through the chat rows */}
                    
                    {messages.map(chat => (<ChatRow chatId={chat.chatId} topic={chat.topic}/>))}
                </div>
            </div>           
        </div>
    </div>
  )
}

export default SideBar