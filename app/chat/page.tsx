// pages/chat/index.tsx
'use client';
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function ChatList() {
  const [chatList, setChatList] = useState<any[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const querySnapshot = await getDocs(collection(db, "chats"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setChatList(data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      <h1>Daftar Chat Customer</h1>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <a href={`/admin/chat/${chat.id}`}>
              Chat ID: {chat.id} ({chat.messages?.length || 0} pesan)
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
