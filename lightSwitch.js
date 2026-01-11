function lightSwitch() {
    let currentTheme = localStorage.getItem("colorTheme");
    switch (currentTheme) {
        case "":
            document.documentElement.classList.add('light-mode');
            localStorage.setItem("colorTheme", "light-mode");
        case "light-mode":
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem("colorTheme", "console-mode");
            break;
        case "console-mode":
            document.documentElement.classList.remove('console-mode');
            localStorage.setItem("colorTheme", "");
            break;
        default:
            console.log("Could not load website theme.")
    }
}