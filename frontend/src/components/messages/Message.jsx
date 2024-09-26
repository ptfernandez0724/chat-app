import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-violet-500" : "bg-gray-600";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;

// STARTER CODE FOR MESSAGE COMPONENT

// const Message = () => {
//     return (
//       <div className="chat chat-end">
//           <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                   <img alt="Tailwind CSS chat bubble component" src={"https://avatar.iran.liara.run/public"} />
//               </div>
//           </div>
//           <div className={`chat-bubble text-white bg-blue-500`}>Hi! Hello there!</div>
//           <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//       </div>
//     )
//   }
  
//   export default Message