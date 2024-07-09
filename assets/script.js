const toggle_button = document.getElementById("toggle__button");
const toggle_container = document.getElementById("toggle__box");
const toggle_text = document.querySelector(".toggle__text");

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  //1. add dark mode to body
  document.body.classList.add("dark-theme");
  toggle_container.classList.add("active");
  toggle_button.classList.add("active");
  toggle_text.classList.add("active");
  //2. update darkmode in localstorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  //1. add dark mode to body
  document.body.classList.remove("dark-theme");
  toggle_container.classList.remove("active");
  toggle_button.classList.remove("active");
  toggle_text.classList.remove("active");
  //2. update darkmode in localstorage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggle_container.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
