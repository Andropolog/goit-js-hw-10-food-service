import './styles.css';
import menuJson from './menu.json';
import menuMarkup from './templates/menu.hbs';

const insertRef = document.querySelector('.js-menu');
const markup = menuMarkup(menuJson);
insertRef.innerHTML = markup;

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', changeTheme);
const Theme = {LIGHT: 'light-theme', DARK: 'dark-theme'};
function changeTheme(event) {
    if (event.target.checked) {
        replaceTheme(Theme.LIGHT, Theme.DARK);
    } else {
        replaceTheme(Theme.DARK, Theme.LIGHT);   
    }
}
function replaceTheme(oldTheme, newTheme) {
    document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem(`Theme`, newTheme);
}
function saveTheme() {
    const theme = localStorage.getItem(`Theme`) ?? Theme.LIGHT;
    document.body.classList.add(theme);
    checkboxRef.checked = theme === Theme.DARK;
}
saveTheme();