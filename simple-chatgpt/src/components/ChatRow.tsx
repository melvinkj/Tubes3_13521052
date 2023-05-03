type Props = {
    id: string;
};

import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

function ChatRow({ id }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const { data:session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(query(
    collection(db, "users", session?.user?.email!, "chats", id, "messages"),
    orderBy("createdAt", "asc")
  ));

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async() => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace("/");
  };

  return (
    <Link href={'/chat/${id}'} className={'chatRow justify-center ${active && "bg-gray-700/50"}'}>
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='flex-1 hidden md:inline-flex truncate'> New Chat</p>
          {messages?.docs[messages?.docs.length = 1]?.data().text || "New Chat"}
        <TrashIcon 
          onClick={removeChat}
          className='h-5 w-5 text-gray-700 hover:text-red-700'/>
    </Link>
  )
}

export default ChatRow