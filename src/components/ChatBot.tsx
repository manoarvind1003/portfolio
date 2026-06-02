"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi there. I'm Mano's Portfolio Assistant. Ask me anything about skills, projects, education, or professional experience."
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);

  async function sendMessage(textToSend?: string) {
    const targetMessage = textToSend || message;
    if (!targetMessage.trim() || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: targetMessage
      }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: targetMessage
        }
      )});

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.answer || "I couldn't process an answer. Please try again."
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Something went wrong. Please check your connection and try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  const suggestions = [
    "Who is Mano Arvind?",
    "Tell me about your projects",
    "What are your skills?",
    "Do you know Kafka?",
    "Tell me about PySpark"
  ];

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            bg-gradient-to-r
            from-[#f36b21]
            via-[#e93d7e]
            to-[#bc1cd2]
            text-white
            font-semibold
            tracking-wide
            text-sm
            px-6
            py-3.5
            rounded-full
            shadow-lg
            shadow-[#e93d7e]/20
            z-[2147483647]
            hover:shadow-xl
            hover:shadow-[#e93d7e]/30
            hover:scale-[1.03]
            active:scale-[0.98]
            transition-all
            duration-300
            flex
            items-center
            gap-2.5
          "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Ask Mano
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-6
            right-6
            w-[420px]
            max-w-[92vw]
            h-[680px]
            max-h-[85vh]
            bg-white
            rounded-2xl
            shadow-2xl
            shadow-slate-950/10
            border
            border-slate-100
            flex
            flex-col
            z-[2147483647]
            overflow-hidden
            transition-all
            duration-300
            ease-out
            animate-in
            fade-in
            slide-in-from-bottom-4
          "
        >
          {/* Header */}
          <div className="relative bg-[#0d0e12] text-white p-5 flex justify-between items-center overflow-hidden">
            {/* Ambient Background Glow matching image shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f36b21]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#bc1cd2]/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h2 className="font-semibold tracking-tight text-base text-slate-100">
                  Mano AI Assistant
                </h2>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-wide">
                  PORTFOLIO INTELLIGENCE
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                relative
                z-10
                w-8 
                h-8 
                flex 
                items-center 
                justify-center 
                rounded-full 
                text-slate-400 
                hover:text-white 
                hover:bg-white/10 
                transition-all
                duration-200
              "
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#fcfcfe]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
                <div
                  className={`
                    max-w-[82%] 
                    p-4 
                    rounded-2xl 
                    text-sm 
                    leading-relaxed
                    ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-[#e93d7e] to-[#bc1cd2] text-white rounded-tr-none font-medium shadow-md shadow-[#bc1cd2]/10"
                        : "bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Custom Modern Typing Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 px-4 py-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#f36b21] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-[#e93d7e] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-[#bc1cd2] rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Contextual Suggestions Area */}
          <div className="px-5 py-3 bg-white border-t border-slate-100/80 flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => sendMessage(item)}
                disabled={loading}
                className="
                  text-xs
                  font-medium
                  bg-slate-50
                  text-slate-600
                  border
                  border-slate-200/60
                  rounded-full
                  px-3.5
                  py-2
                  whitespace-nowrap
                  hover:bg-gradient-to-r
                  hover:from-[#f36b21]/10
                  hover:to-[#e93d7e]/10
                  hover:text-[#e93d7e]
                  hover:border-[#e93d7e]/30
                  disabled:opacity-50
                  disabled:pointer-events-none
                  transition-all
                  duration-200
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* Action Input Bar */}
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2.5 items-center">
            <input
              type="text"
              value={message}
              placeholder="Type your message..."
              disabled={loading}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="
                flex-1
                bg-slate-50
                border
                border-slate-200
                rounded-xl
                px-4
                py-3
                text-sm
                text-slate-800
                placeholder-slate-400
                outline-none
                focus:border-slate-300
                focus:bg-white
                disabled:opacity-60
                transition-all
                duration-200
              "
            />

            <button
              onClick={() => sendMessage()}
              disabled={!message.trim() || loading}
              className="
                bg-gradient-to-br
                from-[#f36b21]
                to-[#e93d7e]
                text-white
                p-3
                rounded-xl
                hover:opacity-95
                disabled:from-slate-100
                disabled:to-slate-100
                disabled:text-slate-400
                transition-all
                duration-200
                flex
                items-center
                justify-center
                w-11
                h-11
                shadow-sm
              "
              aria-label="Send message"
            >
              <svg className="w-4 h-4 transform rotate-45 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}