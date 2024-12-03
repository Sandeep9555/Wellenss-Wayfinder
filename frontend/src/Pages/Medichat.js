import { useState, useEffect } from "react";
import useMediSearchClient from "medisearch_client";
import { v4 as uuidv4 } from "uuid";
import "../Styles/Medichat.css";

function MediChat() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [conversationId, setConversationId] = useState("");
  const [showReferences, setShowReferences] = useState(false); // State to manage reference visibility
  const [isSending, setIsSending] = useState(false); // Prevent multiple API calls

  const apiKey = "66188ba2-a79e-40df-a575-8fcf70094afa";

  // Initialize conversationId only once when the component mounts
  useEffect(() => {
    setConversationId(uuidv4());
  }, []);

  // Helper function to update the last message in a conversation
  const updateLastMessage = (prevConversation, newMessage) => {
    const newLastMessage = {
      ...prevConversation[prevConversation.length - 1],
      message: newMessage,
    };

    return [...prevConversation.slice(0, -1), newLastMessage];
  };

  // Helper function to add a new message to a conversation
  const addNewMessage = (
    prevConversation,
    newMessage,
    sender = "MediSearch"
  ) => {
    return [...prevConversation, { sender, message: newMessage }];
  };

  const eventHandlers = {
    // Handle response from the service
    llm_response: (payload) => {
      const lastMessage = conversation[conversation.length - 1];
      if (lastMessage && lastMessage.sender === "MediSearch") {
        setConversation((prev) => updateLastMessage(prev, payload.text));
      } else {
        setConversation((prev) => addNewMessage(prev, payload.text));
      }
    },

    // Handle articles payload (References)
    articles: (payload) => {
      if (payload.articles.length) {
        const citations = payload.articles
          .map(
            (article, index) =>
              `[${index + 1}] ${article.authors} et al., ${article.title}`
          )
          .join("\n");

        const citationMessage = `\nReferences:\n\n${citations}`;

        setConversation((prev) => {
          const updatedLastMessage = `${
            prev[prev.length - 1].message
          }\n\n${citationMessage}`;
          return updateLastMessage(prev, updatedLastMessage);
        });
      }
    },

    // Handle error
    error: (payload) => {
      console.error("Error occurred:", payload);
    },
  };

  const { sendUserMessage } = useMediSearchClient(apiKey, eventHandlers);

  const handleSend = () => {
    if (message.trim() && !isSending) {
      setIsSending(true); // Mark sending as true to prevent multiple calls

      const conversationSoFar = [...conversation, { sender: "You", message }];

      setConversation(conversationSoFar);

      // Send user message to the API
      sendUserMessage(
        conversationSoFar.map((item) => item.message),
        conversationId,
        "English"
      );

      // Clear input after sending
      setMessage("");

      // Reset sending status after API response
      setIsSending(false);
    }
  };

  // Toggle references visibility
  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="App">
      <div className="inputArea">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message.."
        />
        <button onClick={handleSend} disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </div>

      <div className="chatBox">
        {conversation.map((item, index) => (
          <div key={index}>
            <strong
              style={{
                color: item.sender === "MediSearch" ? "blue" : "black",
              }}
            >
              {item.sender}:{" "}
            </strong>
            <div className="newline-text">{item.message}</div>
            {showReferences && item.message.includes("References") && (
              <div className="references">{item.message}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediChat;
