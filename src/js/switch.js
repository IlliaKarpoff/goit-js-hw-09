const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('.js-switch-input');
const checkTheme = () => {
    if (localStorage.getItem('theme') === 'dark-theme') {
        inputRef.checked = true;
        bodyRef.classList.add('dark-theme');
    } else {
        bodyRef.classList.add('light-theme');
    }
}
checkTheme();
const theme = () => {
    bodyRef.classList.contains('dark-theme') ?
    bodyRef.classList.replace('dark-theme', 'light-theme') :
    bodyRef.classList.replace('light-theme', 'dark-theme') ;
    // bodyRef.classList.toggle('dark-theme');               // Вань, а не лучше ли для переключения использовать toggle?
    localStorage.getItem('theme') === 'dark-theme' ?
    localStorage.setItem('theme', 'light-theme') :
    localStorage.setItem('theme', 'dark-theme') ;
}
inputRef.addEventListener('change', theme)

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };