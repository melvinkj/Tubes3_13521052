import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1 ">
            <div>
                {/* new chat */}

                <div>
                    {/* Algorithm selection */}
                </div>

                <div>
                    {/* Map through the chat rows */}
                    <NewChat/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SideBar