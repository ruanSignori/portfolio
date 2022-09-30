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
const inputCheck = document.querySelector('input#theme');

if (getThemeLocalStorage === 'light') {
  changeTheme(lightTheme)
} else {
  inputCheck.checked = true;
  changeTheme(darkTheme)
};

inputCheck.addEventListener('change', () => {
  const isChecked = inputCheck.checked;
  
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});


