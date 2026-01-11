/***********************
 * USER ID GENERATION *
 ***********************/
function getOrCreateUserId() {
    let userId = localStorage.getItem("chat_user_id");
  
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("chat_user_id", userId);
    }
  
    return userId;
  }
  
  const USER_ID = getOrCreateUserId();
  const API_URL = "http://localhost:5000/chat";
  
  /***********************
   * UI ELEMENTS
   ***********************/
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  
  /***********************
   * HELPERS
   ***********************/
  function addMessage(role, text) {
    const div = document.createElement("div");
    div.className = `message ${role}`;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
  
    addMessage("user", message);
    userInput.value = "";
  
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: USER_ID,
          message,
          platform: "web"
        })
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
      addMessage("bot", data.reply);
  
    } catch (err) {
      console.error("Fetch error:", err);
      addMessage("bot", "Sorry, something went wrong. Please try again.");
    }
  }
  
  /***********************
   * EVENTS
   ***********************/
  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });
  