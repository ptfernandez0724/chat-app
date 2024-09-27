import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

import notificationSound from "../assets/tap-notification.mp3"
import toast from "react-hot-toast";

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        const sound = new Audio(notificationSound);
        sound.play();
        toast("New Message", {
          icon: "📨"
        })
        setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage")
  },[socket, setMessages, messages])
}

export default useListenMessages