type Props = {
    msgContent : String;
    msgSender : String;
}

function Message({msgContent, msgSender}: Props) {
    const isChatGPT = msgSender === "system";
    const msgParts = msgContent.split('\n');
    const msgElements = msgParts.map((part, index) => (
      <p key={index} className="pt-1 text-sm">{part}</p>
    ));
  
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-slate-600"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <p className="pt-1 text-sm"> {msgElements}</p>
        </div>
    </div>
  );
  
}

export default Message;