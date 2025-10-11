import SuccessIcon from "public/images/toast/success.svg";
import ErrorIcon from "/images/toast/error.svg";

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
  error(message) {
    this._createToast(ErrorIcon, 'Erro', message);
  }
  ok(message) {
    this._createToast(SuccessIcon, 'Sucesso', message);
  }
}
