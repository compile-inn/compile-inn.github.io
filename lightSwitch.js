function lightSwitch() {
    currentTheme = sessionStorage.getItem("colorTheme");
    if (currentTheme == "light-mode") {
        document.documentElement.classList.remove('light-mode');
        sessionStorage.setItem("colorTheme", "");
    } else {
        document.documentElement.classList.add('light-mode');
        sessionStorage.setItem("colorTheme", "light-mode");
    }

}

// Theme persistence script (place in <head> or as an external JS file)
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve saved theme preference
  sessionColorTheme = sessionStorage.getItem("colorTheme");
  document.documentElement.classList.add(sessionColorTheme);
});