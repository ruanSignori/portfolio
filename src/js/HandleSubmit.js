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
        return toast.ok("Sucesso", "E-mail enviado!");
      }

      // Se acontecer algum erro que não está previsto, vai cair no tratamento de erro.
      response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
          const messageError = data["errors"].map((error) => error["message"]);

          return toast.error("Error", messageError);
        }
        form.requestSubmit();
        toast.error("Error", "Não foi possível enviar o seu formulário");
      });

      buttonSubmit.removeAttribute("disabled");
    })
    .catch(() => {
      toast.error("Error", "Não foi possível enviar o seu formulário");
    });
};

form.addEventListener("submit", (e) => handleSubmit(e));
