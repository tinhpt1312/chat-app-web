import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

import { useEffect, useState } from "react";

const SOCKET_URL = "http://localhost:3001";

export function useChat() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return { sendMessage };
}
