const lectures = document.querySelector(".lectures-card");
const lecturesWrapper = document.querySelector(".lectures-wrapper");

const labSun = document.querySelector(".label-change-sun");
const labMoon = document.querySelector(".label-change-moon");

const nextButton = document.createElement("button");
const prevButton = document.createElement("button");
const cardsWrapper = document.createElement("div"); //cards-wrapper

isMoon = false;

lecturesWrapper.appendChild(prevButton);
lecturesWrapper.appendChild(nextButton);
lecturesWrapper.appendChild(cardsWrapper);

nextButton.classList.add("next-button");
prevButton.classList.add("prev-button");
cardsWrapper.classList.add("cards-wrapper");

prevButton.innerHTML = `
  <svg class="prev-arrow-icon">
    <use href="img/sprite.svg#prev-arrow"></use>
  </svg>
`;

nextButton.innerHTML = `
  <svg class="next-arrow-icon">
    <use href="img/sprite.svg#next-arrow"></use>
  </svg>
`;

const cards = [
  {
    link: "antiquity-task.html",
    path: "img/antiquity.webp",
    title: "Античная философия",
    text: "Практика 1",
  },

  {
    link: "middle-age-task.html",
    path: "img/middle-ages.jpg",
    title: "Средневековая философия",
    text: "Практика 2",
  },

  {
    link: "revival-task.html",
    path: "img/revival.jpeg",
    title: `Философия эпохи <br />Возрождения`,
    text: "Практика 3",
  },
];

let counter = 0;

const flipCards = () => {
  for (let i = 0; i < cards.length; i++) {
    if (i === counter) {
      cardsWrapper.innerHTML = `
      <a class="lectures-card" href="${cards[i].link}">
        <img
          class="lectures-img middle-age"
          src="${cards[i].path}"
          alt="
          revival"
        />
        <h3 class="lectures-card-title">${cards[i].title}</h3>
        <p class="lectures-card-text">${cards[i].text}</p>
      </a>
      `;
    }
  }

  if (counter === 0) prevButton.style.visibility = "hidden";
  else prevButton.style.visibility = "visible";

  if (counter === cards.length - 1) nextButton.style.visibility = "hidden";
  else nextButton.style.visibility = "visible";
};

flipCards();

nextButton.addEventListener("click", () => {
  counter++;
  flipCards();
});

prevButton.addEventListener("click", () => {
  counter--;
  flipCards();
});
