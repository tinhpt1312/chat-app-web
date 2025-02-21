"use client";

import { Message } from "@/src/types/chat";

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  const currentUserId = "currentUser"; // Thay thế bằng ID user thực tế

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.senderId === currentUserId ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.senderId === currentUserId ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-70">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
