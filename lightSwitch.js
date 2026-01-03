function lightSwitch() {
    let currentTheme = localStorage.getItem("colorTheme");

    if (currentTheme == "light-mode") {
        document.documentElement.classList.remove('light-mode');
        localStorage.setItem("colorTheme", "");
    } else {
        document.documentElement.classList.add('light-mode');
        localStorage.setItem("colorTheme", "light-mode");
    }
}