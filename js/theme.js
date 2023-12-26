const labelSun = document.querySelector(".label-change-sun");
const labelMoon = document.querySelector(".label-change-moon");

const wrapper = document.querySelector(".wrapper");
const night = document.querySelector(".night");

labelSun.addEventListener("click", (e) => {
  labelSun.style.display = "none";
  labelMoon.style.display = "block";
  applyTheme(e.currentTarget.id);
  localStorage.setItem("id", e.currentTarget.id);
  localStorage.setItem("key", "dark");
});

labelMoon.addEventListener("click", (e) => {
  labelSun.style.display = "block";
  labelMoon.style.display = "none";
  applyTheme(e.currentTarget.id);
  localStorage.setItem("id", e.currentTarget.id);
  localStorage.setItem("key", "light");
});

let applyTheme = (themeName) => {
  let themeUrl = `css/${themeName}.css`;
  document.querySelector('[title="theme"]').setAttribute("href", themeUrl);
};

let activeTheme = localStorage.getItem("id");
let activeLabel = localStorage.getItem("key");

if (activeTheme === null) {
  applyTheme("light");
} else {
  applyTheme(activeTheme);
}

if (activeLabel === "dark") {
  labelSun.style.display = "none";
  labelMoon.style.display = "block";
} else if (activeLabel === "light") {
  labelSun.style.display = "block";
  labelMoon.style.display = "none";
} else if (activeLabel === null) {
  labelSun.style.display = "block";
  labelMoon.style.display = "none";
}
