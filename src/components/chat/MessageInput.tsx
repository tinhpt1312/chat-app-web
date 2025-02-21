"use client";

import { useState } from "react";

interface Props {
  onSendMessage: (content: string) => void;
}

export default function MessageInput({ onSendMessage }: Props) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Nhập tin nhắn..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600"
        >
          Gửi
        </button>
      </div>
    </form>
  );
}
