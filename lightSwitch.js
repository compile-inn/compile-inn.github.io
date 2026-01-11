function lightSwitch() {
    let currentTheme = localStorage.getItem("colorTheme");
    document.documentElement.classList.remove('light-mode', 'console-mode');

    switch (currentTheme) {
        case null:
            document.documentElement.classList.add('light-mode');
            localStorage.setItem("colorTheme", "light-mode");
            break;
        case "light-mode":
            document.documentElement.classList.add('console-mode');
            localStorage.setItem("colorTheme", "console-mode");
            break;
        case "console-mode":
            localStorage.removeItem("colorTheme");
            break;
        default:
            console.log("Color theme could not be loaded.")
    }
}
