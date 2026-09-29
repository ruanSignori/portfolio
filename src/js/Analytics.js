// O gtag.js só é baixado depois que a página terminou de carregar,
// para não disputar rede e CPU com o conteúdo principal.
const GA_ID = "G-DRESH3RDS0";

const loadAnalytics = () => {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
};

const scheduleLoad = () => {
  "requestIdleCallback" in window
    ? requestIdleCallback(loadAnalytics, { timeout: 3000 })
    : setTimeout(loadAnalytics, 1500);
};

document.readyState === "complete"
  ? scheduleLoad()
  : window.addEventListener("load", scheduleLoad, { once: true });
