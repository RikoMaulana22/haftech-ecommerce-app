// pages/admin/chat/[id].tsx
'use client';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "@/firebase/config"; // Pastikan path ini sesuai
import { onSnapshot, doc, updateDoc, arrayUnion } from "firebase/firestore";

interface Message {
  sender: string;
  text: string;
  timestamp: number;
}

export default function AdminChat() {
  const router = useRouter();
  const { id } = router.query;
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (typeof id !== "string") return;

    const chatRef = doc(db, "chats", id);

    const unsub = onSnapshot(chatRef, (docSnap) => {
      if (docSnap.exists()) {
        setMessages(docSnap.data()?.messages || []);
      }
    });

    return () => unsub();
  }, [id]);

  const sendReply = async () => {
    if (typeof id !== "string" || !reply.trim()) return;

    const chatRef = doc(db, "chats", id);
    await updateDoc(chatRef, {
      messages: arrayUnion({
        sender: "admin",
        text: reply,
        timestamp: Date.now(),
      }),
    });

    setReply("");
  };

  return (
    <div>
      <h2>Chat dengan Customer {id}</h2>
      <div style={{ border: "1px solid gray", padding: "1rem", maxHeight: 300, overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Tulis balasan..."
        style={{ width: "80%", marginTop: "1rem" }}
      />
      <button onClick={sendReply} style={{ marginLeft: "1rem" }}>Balas</button>
    </div>
  );
}
