import React, { useState } from "react";
import { RiRobot3Fill } from "react-icons/ri";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hi 👋 How can I help you?", sender: "bot" },
    ]);

    // 🤖 Auto Reply Logic
    const getReply = (msg) => {
        msg = msg.toLowerCase();

        if (msg.includes("price") || msg.includes("cost")) {
            return "Our price starts from ৳60 for documents 📄";
        }
        if (msg.includes("track")) {
            return "Go to 'My Parcels' to track your parcel 📦";
        }
        if (msg.includes("send")) {
            return "Go to 'Send Parcel' page to create order 🚚";
        }
        if (msg.includes("rider")) {
            return "Click 'Be a Rider' to join as a delivery partner 🏍️";
        }
        if (msg.includes("delivery")) {
            return "We deliver across all districts 🌍";
        }

        return "Sorry 😔 I didn't understand. Try asking about price, delivery, or tracking.";
    };

    // 📩 Send Message
    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { text: input, sender: "user" };
        const botMsg = { text: getReply(input), sender: "bot" };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    };

    // 🔥 Quick Suggestion Click (Auto Send)
    const handleQuickMessage = (text) => {
        const userMsg = { text, sender: "user" };
        const botMsg = { text: getReply(text), sender: "bot" };

        setMessages((prev) => [...prev, userMsg, botMsg]);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-20 right-8 bg-black text-white p-4 rounded-full shadow-lg z-50"
            >
                <RiRobot3Fill size={30} />
            </button>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-30 right-30 w-140  p-5 bg-white shadow-2xl rounded-xl z-50">

                    {/* Header */}
                    <div className="flex justify-between items-center bg-black text-white p-3 rounded-t-xl">
                        <span>ZapShift Bot 🤖</span>
                        <button onClick={() => setOpen(false)}>✖</button>
                    </div>

                    {/* Messages */}
                    <div className="p-3 h-64 overflow-y-auto space-y-2">

                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded max-w-[75%] ${msg.sender === "user"
                                    ? "bg-black text-white ml-auto"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {/* 🔥 Suggestion Buttons */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            <button
                                onClick={() => handleQuickMessage("price")}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                            >
                                💰 Price
                            </button>

                            <button
                                onClick={() => handleQuickMessage("track")}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                            >
                                📦 Track
                            </button>

                            <button
                                onClick={() => handleQuickMessage("send parcel")}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                            >
                                🚚 Send
                            </button>

                            <button
                                onClick={() => handleQuickMessage("rider")}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                            >
                                🏍️ Rider
                            </button>
                        </div>

                    </div>

                    {/* Input */}
                    <div className="flex border-t  mt-25">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1 p-2 outline-none"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="px-4 bg-black text-white"
                        >
                            Send
                        </button>
                    </div>

                </div>
            )}
        </>
    );
};

export default Chatbot;