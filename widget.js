
(function () {
  const script = document.currentScript;
  const url = new URL(script.src)

  const phone = url.searchParams.get("phone") || "";
  const text = url.searchParams.get("text") || "Hello! How can we help you?";
  const position = url.searchParams.get("position") || "right";

  const link = 'https://wa.me${phone}?text=${encodeURIComponent(text)}'

  //HTML 
  
  const widget = document.createElement("div");
  widget.className = "wa-widget";
  widget.innerHTML = `
  <div class="wa-widget__chat">
  <div class="wa-widget__header">
    <div class="wa-widget__status">
      <strong>Support</strong>
      <span>● Online</span>
    </div>
    <div class="wa-widget__close">&times;</div>
  </div>
  <div class="wa-widget__body">${text}</div>
  <a href="${link}" class="wa-widget__link">Start WhatsApp Chat</a>
</div>
<div class="wa-widget__button">
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png">
</div>
  `;
 
  document.body.appendChild(widget);

  // POSITION
  if (position === "left") {
    widget.style.left = "20px";
  } else {
    widget.style.right = "20px";
  }

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
  
  .wa-widget {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 9999;
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
  }

  img {
    width: 30px;
    height: 30px;
  }
  
  .wa-widget__button {
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
  
  .wa-widget__button:hover {
    transform: scale(1.1);
  }
  
  .wa-widget__chat {
    width: 320px;
    height: 320px;
    background-color: antiquewhite;
    border-radius: 20px;
    box-shadow:0 15px 40px rgba(0,0,0,.15);
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition:.35s ease;
    transform: translateY(10px) scale(0.95);
    margin-bottom: 20px;
    animation: fadeIn .5s ease;
  }
  
  @keyframes fadeIn {
    from {opacity: 0; transform: translateY(10px);}
    from {opacity: 1; transform: translateY(0);}
  }
  
  .wa-widget__chat--open {
    opacity: 1;
    visibility: visible;
    transform:translateY(0) scale(1);
  }
  
  .wa-widget__header {
    background-color: #3FCC9A;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    font-size: 14px;
  }
  
  .wa-widget__status {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .wa-widget__status strong {
    font-size: 14px;
  }
  
  .wa-widget__status span {
    margin-top: 5px;
    font-size: 14px;
  }
  
  .wa-widget__close {
    font-size: 18px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid;
    border-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .wa-widget__body {
    width: 190px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
    margin-top: 30px;
    margin-left: 10px;
    padding: 10px;
    font-size: 14px;
  }
  
  .wa-widget__link {
    text-decoration: none;
    background-color: #3FCC9A;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 100px;
    margin-left: 25px;
    display: inline-block;
    width: 250px;
    text-align: center;
    transition:.2s;
  }
  
  .wa-widget__link:hover {
    background:#1ebe5d;
  }
  
  @media(max-width:480px) {
    .wa-widget {
      right:15px;
      bottom:15px;
    }
  
  `


  document.head.appendChild(style);

  // JS логика
  const waChat = widget.querySelector(".wa-widget__chat");
  const waButton = widget.querySelector(".wa-widget__button");
  const waClose = widget.querySelector(".wa-widget__close");

  const toggle = () => {
    waChat.classList.toggle("wa-widget__chat--open");
  };

  waButton.addEventListener("click", toggle);
  waClose.addEventListener("click", toggle);
})();

