"use client"; // Enables client-side rendering
// import './style-chat-interface.css'; // Import styles
import { useState } from "react"; // Import state management hook
import NavBar from "./NavBar";
import Footer from "./Footer";


// Main Chat component
const Chat = () => {
  // State to store chat messages and user input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Update input value when user types in the text field
  const handleInputChange = (e) => setInput(e.target.value);

  // Handle form submission when user sends a message
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const userMessage = { role: "user", content: input }; // User's message object
    setMessages((prev) => [...prev, userMessage]); // Add user message to state

    try {
      // Send request to chat API with current conversation messages
      const response = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("API request failed"); // Handle API errors

      const data = await response.json(); // Parse JSON response
      if (data && data.content) {
        const aiMessage = { role: "assistant", content: data.content }; // AI's response object
        setMessages((prev) => [...prev, aiMessage]); // Add AI message to state
      }
    } catch (error) {
      console.error("Error during API request:", error); // Log any errors
    }
    setInput(""); // Clear input field
  };






  // Render chat messages and input form
  return (


    

    <div className="app chat-section-bg">
    <NavBar />
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((m, index) => (
          // Assign appropriate class for user or assistant messages
          <div key={index} className={m.role === "user" ? "user-message" : "assistant-message"}>
            <p>{m.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmitHandler} className="chat-form">
        <input
          className="chat-input"
          type="text"
          placeholder="Type your message here..."
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit" className="chat-button">Send</button>
      </form>


    </div>

      <Footer />
    </div>
  );
};

export default Chat;

