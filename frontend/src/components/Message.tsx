type Props = {
    msgContent : String;
    msgSender : String;
}

function Message({msgContent, msgSender}: Props) {
    const isChatGPT = msgSender === "\"system\"";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-slate-600"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <p className="pt-1 text-sm"> {msgContent}{msgSender}</p>
        </div>
    </div>
  );
  
}

export default Message;