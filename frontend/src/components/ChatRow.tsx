type Props = {
    chatId: number;
    topic: string;
};

import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
// import { PrismaClient } from "@prisma/client";

import { db } from '@/lib/prisma';

// const prisma = new PrismaClient()

function ChatRow({ chatId, topic }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  // const { data:session } = useSession();
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(
    () => {
        const initMessages = async () => {
            const response = await fetch('api/chats/${encodeURIComponent(chatId)}', {
                method: "GET",
            });
            setMessages(await response.json())
        }

        initMessages();
    }, []);

  // const [messages] = useCollection(query(
  //   collection(db, "users", session?.user?.email!, "chats", id, "messages"),
  //   orderBy("createdAt", "asc")
  // ));

  // const fetchMessages = async () => {
  //   const posts = await db.chatMessageHistory.findMany({
  //     where: {
  //       chatId: chatId,
  //     },
  //   });
  //   setMessages(posts);
  // };
  

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes("${chatId}"));
  }, [pathname]);

  const removeChat = async() => {
    
    await prisma.chat.delete({ where: { chatId } });
    router.replace("/");
  };

  return (
    <Link href={'/chat/${id}'} className={'chatRow justify-center ${active && "bg-gray-700/50"}'}>
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