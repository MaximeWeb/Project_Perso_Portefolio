import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMessages } from "../services/messageService.js";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await getMessages();

        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  return (
    <main className="messages-page">
      <div className="messages-header">
        <div>
          <p className="section-label">
            ADMINISTRATION
          </p>

          <h1>Messages</h1>

          <p>
            {messages.length} message
            {messages.length > 1 ? "s" : ""} reçu
            {messages.length > 1 ? "s" : ""}
          </p>
        </div>

        <Link
          to="/admin/dashboard"
          className="back-button"
        >
          ← Retour aux projets
        </Link>
      </div>

      {loading && (
        <p>Chargement des messages...</p>
      )}

      {error && (
        <p className="login-error">{error}</p>
      )}

      {!loading && !error && messages.length === 0 && (
        <div className="empty-messages">
          <h2>Aucun message</h2>

          <p>
            Les messages envoyés depuis le formulaire
            de contact apparaîtront ici.
          </p>
        </div>
      )}

      <div className="messages-list">
        {messages.map((message) => (
          <article
            className="message-card"
            key={message._id}
          >
            <div className="message-card-header">
              <div>
                <h2>{message.name}</h2>

                <a href={`mailto:${message.email}`}>
                  {message.email}
                </a>
              </div>

              <time>
                {new Date(
                  message.createdAt
                ).toLocaleDateString("fr-FR")}
              </time>
            </div>

            <p className="message-content">
              {message.message}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Messages;