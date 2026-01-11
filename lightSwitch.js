function lightSwitch() {
    let currentTheme = localStorage.getItem("colorTheme");
    document.documentElement.classList.remove('light-mode', 'console-mode');

    switch (currentTheme) {
        case null:
            document.documentElement.classList.add('light-mode');
            localStorage.setItem("colorTheme", "light-mode");
            break;
        case "light-mode":
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem("colorTheme", "console-mode");
            break;
        case "console-mode":
            document.documentElement.classList.remove('console-mode');
            break;
        default:
            console.log("Theme could not be loaded.")
    }
}