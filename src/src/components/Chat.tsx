'use client'
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Message from "./Message";
import { useLayoutEffect, useState } from "react";

type Props = {
    chatId: number;
}

function Chat({chatId}: Props) {

  const [messages, setMessages] = useState<any[]>([]);

  useLayoutEffect(
      () => {
          const initMessages = async () => {
              const response = await fetch(`/api/chats/${encodeURIComponent(chatId)}`, {
                  method: "GET",
              });
              console.log("Messages");
              const message = await response.json();
              setMessages(message)
          }

          initMessages();
      }, [setMessages]
  )


  return (
  <div className="flex-1 overflow-y-auto overflow-x-hidden">
    {messages?.length == 0 && (
      <>
        <p className="mt-10 text-center text-white">
          Type a prompt in below to get started!
        </p>
        <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
      </>
    )}

    {messages?.map((message) => (
      <Message msgContent={message.msgContent} msgSender={message.msgSender} />
    ))}
  </div>
  );
}

export default Chat