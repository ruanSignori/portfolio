

const buttonSubmit = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

const handleSubmit = async (event) => {
  event.preventDefault();
  buttonSubmit.setAttribute("disabled", "true");

  const data = new FormData(event.target);

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
        alert("E-mail enviado");
        form.reset();
      }
    })
    .catch((error) => {
      alert("Oops! There was a problem submitting your form");
    });
};

form.addEventListener("submit", (e) => handleSubmit(e));
