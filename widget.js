(function () {

  function init() {

    const script = document.currentScript;

    // =========================
    // ⚙️ ПАРАМЕТРЫ (для клиента)
    // =========================
    const url = new URL(script.src);

    const phone = url.searchParams.get("phone") || "123456789";
    const text = url.searchParams.get("text") || "Hello! How can we help you?";
    const position = url.searchParams.get("position") || "right";

    const link = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // =========================
    // 🔤 GOOGLE FONTS
    // =========================
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // =========================
    // 🧱 HTML
    // =========================
    const widget = document.createElement("div");
    widget.className = "wa__widget";

    widget.innerHTML = `
      <div class="wa__widget-chat">
        <div class="wa__widget-header">
          <div class="wa__widget-status">
            <strong>Support</strong>
            <span>● Online</span>
          </div>
          <div class="wa__widget-close">&times;</div>
        </div>

        <div class="wa__widget-message">${text}</div>

        <a href="${link}" target="_blank" class="wa__widget-link">
          Start WhatsApp Chat
        </a>
      </div>

      <div class="wa__widget-button">
        <img 
          src="https://cdn.jsdelivr.net/gh/Prowebgd/whatsapp-widget@main/images/avatar.png"
          alt="WhatsApp"
          class="wa__widget-icon"
        >
      </div>
    `;

    document.body.appendChild(widget);

    // =========================
    // 📍 POSITION
    // =========================
    if (position === "left") {
      widget.style.left = "20px";
    } else {
      widget.style.right = "20px";
    }

    // =========================
    // 🎨 CSS
    // =========================
    const style = document.createElement("style");
    style.innerHTML = `
      .wa__widget * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }

      .wa__widget {
        position: fixed;
        bottom: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .wa__widget-icon {
        width: 40px;
        height: 40px;
      }

      .wa__widget-button {
        background: #25D366;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(0,0,0,.25);
        transition: .3s;
      }

      .wa__widget-button:hover {
        transform: scale(1.1);
      }

      .wa__widget-chat {
        width: 300px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 15px 40px rgba(0,0,0,.15);
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: .3s;
        margin-bottom: 10px;
      }

      .wa__widget-chat--open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .wa__widget-header {
        background: #25D366;
        color: #fff;
        padding: 12px;
        display: flex;
        justify-content: space-between;
      }

      .wa__widget-message {
        padding: 12px;
        font-size: 14px;
      }

      .wa__widget-link {
        display: block;
        margin: 10px;
        padding: 10px;
        background: #25D366;
        color: #fff;
        text-align: center;
        border-radius: 8px;
        text-decoration: none;
      }

      .wa__widget-close {
        cursor: pointer;
      }
    `;

    document.head.appendChild(style);

    // =========================
    // ⚙️ ЛОГИКА
    // =========================
    const chat = widget.querySelector(".wa__widget-chat");
    const btn = widget.querySelector(".wa__widget-button");
    const close = widget.querySelector(".wa__widget-close");

    const toggle = () => {
      chat.classList.toggle("wa__widget-chat--open");
    };

    btn.onclick = toggle;
    close.onclick = toggle;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
