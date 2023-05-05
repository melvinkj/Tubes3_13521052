"use client";
import NewChat from "./NewChat"
import ChatRow from "./ChatRow";
import { useEffect, useState } from "react";
import { db } from "@/lib/prisma";
import Chat from "./Chat";

function SideBar() {
    // const { data:session } = useSession();

    const [messages, setMessages] = useState<any[]>([]);

    useEffect(
        () => {
            const initMessages = async () => {
                const response = await fetch('api/chats', {
                    method: "GET",
                });
                setMessages(await response.json())
            }

            initMessages();
        }
    )
    // const chats = await db.chats.findMany({
    //     orderBy: { createdAt: "asc" },
    //   });

    // const [chats, loading, error] = useCollection(){
    //     collection(db, "users", "chats"), orderBy("createdAt", "asc")
    // };

    // console.log(chats);
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
                    
                    {/* {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))} */}
                    {/* {messages.map(chat => (<ChatRow chatId={chat.chatId}/>))} */}
                    <ChatRow chatId={1} topic={"ayam"}/>
                    {/* chore: update chat view from db */}
                </div>
            </div>           
        </div>
        {/* {session && (
                <img 
                onClick={()=> signOut()}
                src={session.user?.image!}
                // chore: placeholder for empty image
                alt="Profile pic" 
                className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />   
        )} */}
    </div>
  )
}

export default SideBar