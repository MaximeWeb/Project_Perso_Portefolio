import { useState } from "react";
import { sendMessage } from "../services/messageService.js";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      await sendMessage(formData);

      setStatus("Message envoyé avec succès !");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-intro">
          <p className="section-label">CONTACT</p>

          <h2>
            Un projet en tête ?
            <span> Parlons-en.</span>
          </h2>

          <p>
            Une question, une opportunité ou simplement envie d'échanger ?
            Envoyez-moi un message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="vous@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Parlez-moi de votre projet..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="contact-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;