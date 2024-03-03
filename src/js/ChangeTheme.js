import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

const rootElement = document.documentElement;

const changeProperty = (property, value) => {
  rootElement.style.setProperty(property, value);
};

const changeTheme = (theme) => {
  theme === lightTheme
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark");

  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
};

const getThemeLocalStorage = localStorage.getItem("theme");
getThemeLocalStorage === "light"
  ? changeTheme(lightTheme)
  : changeTheme(darkTheme);

const inputChangeTheme = document.querySelector("input#theme");
inputChangeTheme.addEventListener("change", () => {
  const switchIsChecked = inputChangeTheme.checked;

  console.log(switchIsChecked);

  switchIsChecked ? changeTheme(lightTheme) : changeTheme(darkTheme);
});
