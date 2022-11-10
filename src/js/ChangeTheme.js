import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

const rootElement = document.documentElement;

const changeProperty = (property, value) => {
  rootElement.style.setProperty(property, value);
};

const changeTheme = (theme) => {
  theme === darkTheme ? 
    localStorage.setItem('theme', 'dark') : 
    localStorage.setItem('theme', 'light');

  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  };
};

const getThemeLocalStorage = localStorage.getItem('theme');
const inputChangeTheme = document.querySelector('input#theme');

if (getThemeLocalStorage === 'light') {
  changeTheme(lightTheme);
} else {
  inputChangeTheme.checked = true;
  changeTheme(darkTheme);
};

inputChangeTheme.addEventListener('change', () => {
  const switchIsChecked = inputChangeTheme.checked;
  
  switchIsChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});