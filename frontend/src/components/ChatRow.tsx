type Props = {
    chatId: number;
    topic: string;
};

import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect } from "react";
import React, { useState, useEffect } from 'react';

function ChatRow({ chatId, topic }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);


  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(`${chatId}`));
    // chore: view for single chat session
  }, [pathname]);

  const removeChat = async() => {
    const data = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
      method: "DELETE",
    })
    console.log("Chat Removed")
    console.log(chatId)
    router.replace("/");

  };

  return (
    <Link href={`/chat/${chatId}`} className={`chatRow justify-center ${active && "bg-gray-700/50"}`}>
        
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='flex-1 hidden md:inline-flex truncate'>{topic || "New Chat"} </p>
          {/* {messages?.docs[messages?.docs.length = 1]?.data().text || "New Chat"} */}
          
          {/* {messages.length=chatId} */}
          {/* {topic} */}
        <TrashIcon 
          onClick={removeChat}
          className='h-5 w-5 text-gray-700 hover:text-red-700'/>
    </Link>
  )
}

export default ChatRow