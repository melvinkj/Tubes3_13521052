import { PlusIcon } from "@heroicons/react/24/solid"

function NewChat() {

    const createNewChat = async() => {
        
    }
  return (
    <div className="border border-gray-700 items-center chatRow">
        <PlusIcon className="h-4 w-4"/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat