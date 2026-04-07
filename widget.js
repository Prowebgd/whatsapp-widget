(function () {

  function init () {

    const script = document.currentScript;
    const url = new URL(script.src);

    const position = url.searchParams.get("position") || "right";

    const widget = document.createElement("div");
    widget.className = "wa__widget";

    widget.innerHTML = `
      <div class="wa__widget-button">
        <img class="wa__widget-icon" src="https://cdn.jsdelivr.net/gh/Prowebgd/whatsapp-widget@main/images/icons8-whatsapp-50.png" alt="wa">
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
      .wa__widget * {
        box-sizing: border-box;
      }

      .wa__widget {
        display: flex;
        position: fixed;
        bottom: 20px;
        z-index: 9999;
      }

      .wa__widget-button {
        background-color: #25D366;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .wa__widget-icon {
        width: 30px;
        height: 30px;
      }
    `;

    document.head.appendChild(style);
  }

  init();

})();
