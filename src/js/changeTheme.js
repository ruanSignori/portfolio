import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

const inputCheck = document.querySelector('input#theme');
const rootElement = document.documentElement;

inputCheck.addEventListener('change', () => {
  const isChecked = inputCheck.checked;
  
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

const changeTheme = (theme) => {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  };
};

const changeProperty = (property, value) => {
  rootElement.style.setProperty(property, value);
};

