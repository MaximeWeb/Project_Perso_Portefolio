const API_URL = "http://localhost:5000/api/messages";

export const sendMessage = async (messageData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Impossible d'envoyer le message");
  }

  return data;
};