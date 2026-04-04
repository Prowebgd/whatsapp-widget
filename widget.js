
(function () {

  function init() {


  const script = document.currentScript || document.querySelector('script[src*="widget.js"]');

  const baseUrl = script.src.replace("widget.js", "");

  const img = document.createElement("img");
  img.src = "https://cdn.jsdelivr.net/gh/prowebgd/REPO@main/images/avatar.png";

  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:wdth,wght@75..100,100..900&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);


  const phone = "123456789"
  const text = "Hello! How can we help you?"
  const position = "right";

  const link = `https://wa.me${phone}?text=${encodeURIComponent(text)}`

  
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
    <a href="${link}" class="wa__widget-link">Start WhatsApp Chat</a>
  </div>
  <div class="wa__widget-button">
  <img width="36" height="36" src="https://cdn.jsdelivr.net/gh/prowebgd/REPO@main/images/avatar.png" alt="WhatsApp" class="wa__widget-icon">
  </div>
  `;
 
  document.body.appendChild(widget);

  if (position === "left") {
    widget.style.left = "20px";
  } else {
    widget.style.right = "20px";
  }

  const style = document.createElement("style");
  style.innerHTML = `

  * {
    box-sizing: border-box;
  }

  .wa__widget {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 9999;
    font-weight: 400;
    line-height: 1.4;
    font-size: 14px;
    color: #494F55;
  }

  .wa__widget-icon {
    width: 30px;
    height: 30px;
  }
  
  .wa__widget-button {
    background-color: #3FCC9A;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
    margin-top: 10px;
    transition: .3s;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
  }
  
  .wa__widget-button:hover {
    transform: scale(1.1);
  }
  
  .wa__widget-chat {
    width: 320px;
    height: 320px;
    background-color: #faf0e6;
    border-radius: 20px;
    box-shadow:0 15px 40px rgba(0,0,0,.15);
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition:.35s ease;
    transform: translateY(10px) scale(0.95);
    margin-bottom: 20px;
    animation: fadeIn .5s ease;
    font-family: "Roboto", sans-serif;
    lign-heght: 1.4;
  }
  
  @keyframes fadeIn {
    from {opacity: 0; transform: translateY(10px);}
    from {opacity: 1; transform: translateY(0);}
  }
  
  .wa__widget-chat--open {
    opacity: 1;
    visibility: visible;
    transform:translateY(0) scale(1);
  }
  
  .wa__widget-header {
    background-color: #3FCC9A;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    font-size: 14px;
  }
  
  .wa__widget-status {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .wa__widget-status strong {
    font-size: 18px;
  }
  
  .wa__widget-status span {
    margin-top: 5px;
    font-size: 18px;
  }
  
  .wa__widget-close {
    font-size: 20px;
    cursor: pointer;
  }
  
  .wa__widget-message {
    max-width: 170px;
    min-height: 60px;
    background-color: white;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 10px;
    marging-right: 10px;
    padding: 10px;
    font-size: 18px;
    transition: .3s;
    animation: pulse 3s infinite;
  }
  
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
  }
  
  .wa__widget-link {
    text-decoration: none;
    background-color: #3FCC9A;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 80px;
    margin-left: 35px;
    display: inline-block;
    width: 250px;
    text-align: center;
    transition:.2s;
    font-size: 18px;
    transition: .3s;
    animation: pulse 3s infinite;
  }
  
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
  }
  
  
  .wa__widget-link:hover {
    background: #00A36C;
  }
  
  @media(max-width:480px) {
    .wa__widget {
      right:15px;
      bottom:15px;
    }
  `;

  document.head.appendChild(style);

  const waChat = widget.querySelector(".wa__widget-chat");
  const waButton = widget.querySelector(".wa__widget-button");
  const waClose = widget.querySelector(".wa__widget-close");

  const toggle = () => {
    waChat.classList.toggle("wa__widget-chat--open");
  };

  waButton.addEventListener("click", toggle);
  waClose.addEventListener("click", toggle);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
})();
