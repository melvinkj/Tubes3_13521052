import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'


type Props = {
    params: {
        id: number;
    }
}
function ChatPage({params: {id}} : Props) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        <Chat chatId={id}/>
        <ChatInput chatId={id} />
        {/* ChatInput */}
    </div>
  )
}

export default ChatPage