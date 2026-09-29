// O player do Lottie é pesado e a animação fica escondida em telas pequenas (Contact.css),
// então o script só é baixado quando a animação está visível e perto de entrar na tela.
const PLAYER_SRC = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";

const player = document.querySelector("dotlottie-player");
const showsAnimation = window.matchMedia("(min-width: 801px)");

let loaded = false;

const loadPlayer = () => {
  if (loaded) return;
  loaded = true;

  const script = document.createElement("script");
  script.type = "module";
  script.src = PLAYER_SRC;
  document.head.appendChild(script);
};

const observer = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting) && showsAnimation.matches) {
    loadPlayer();
    observer.disconnect();
  }
}, {
  rootMargin: "300px"
});

if (player) observer.observe(player);
