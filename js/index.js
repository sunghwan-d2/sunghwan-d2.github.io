// js/index.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleTheme');
    const body = document.body;
    const header = document.querySelector('header');

    // 초기 테마 설정
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        header.classList.toggle('dark-mode', currentTheme === 'dark-mode');
        toggleButton.textContent = currentTheme === 'dark-mode' ? 'LIGHT' : 'DARK';
    }

    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            toggleButton.textContent = 'DARK';
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            toggleButton.textContent = 'LIGHT';
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
