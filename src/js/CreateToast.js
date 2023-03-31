import SucessIcon from "../assets/images/toast/sucess.svg";
import ErrorIcon from "../assets/images/toast/error.svg";

export class CreateToast {
  _createToast(srcIcon, title, message) {
    const body = document.querySelector("body");
    const toast = `
      <img src="${srcIcon}" alt="ícone de ${title}" width="30" />
      <div>
        <p class="title-toast">${title}</p>
        <p class="message-toast">${message}</p>
      </div>
    `;
    const toastElement = document.createElement("div");
    toastElement.classList.add("toast", "flex");
    toastElement.innerHTML = toast;

    body.appendChild(toastElement);
  }
  error(title, message) {
    this._createToast(ErrorIcon, title, message);
  }
  ok(title, message) {
    this._createToast(SucessIcon, title, message);
  }
}
