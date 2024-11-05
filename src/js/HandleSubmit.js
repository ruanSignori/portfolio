import { CreateToast } from "./CreateToast";

const buttonSubmit = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

const toast = new CreateToast();

const handleSubmit = (event) => {
  event.preventDefault();
  buttonSubmit.setAttribute("disabled", "true");

  // Pegar os dados do formulário
  const data = new FormData(event.target);

  // Se algum dos input estiver vazio, o formulário e reconfigurado, irá cair no tratamento de erro.
  for (const value of data) {
    if (value[1].trim(" ") === "") {
      form.requestSubmit();
      buttonSubmit.removeAttribute("disabled");
    }
  }

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      
      if (response.ok) {
        form.reset();
        buttonSubmit.removeAttribute("disabled");
        return toast.ok("E-mail enviado!");
      }

      // Tratamento de erro.
      response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
          const messageError = getErrorMessage(data['errors']);
          return toast.error(messageError);
        }

        toast.error("Não foi possível enviar o seu formulário");
      });

      buttonSubmit.removeAttribute("disabled");
    })
    .catch(() => {
      toast.error("Não foi possível enviar o seu formulário");
    });
};

const getErrorMessage = (data) => {
  const messageTranslated = {
    TYPE_EMAIL: 'Tipo de e-mail inválido',
    INVALID_REQUEST: "A solicitação é inválida.",
    REQUIRED: "Este campo é obrigatório.",
    EMPTY: "Informe uma mensagem para ser enviada"
  }

  const message = data.map((error) => { 
    return messageTranslated[error["code"]];
  })

  return message;
}

form.addEventListener("submit", (e) => handleSubmit(e));
