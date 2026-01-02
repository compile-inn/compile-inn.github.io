function lightSwitch() {
    let currentTheme = sessionStorage.getItem("colorTheme");

    if (currentTheme == "light-mode") {
        document.documentElement.classList.remove('light-mode');
        sessionStorage.setItem("colorTheme", "");
    } else {
        document.documentElement.classList.add('light-mode');
        sessionStorage.setItem("colorTheme", "light-mode");
    }

}