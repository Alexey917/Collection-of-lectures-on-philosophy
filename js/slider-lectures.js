const lecturesWrapper = document.querySelector(".lectures-wrapper");

const labelSunn = document.querySelector(".label-change-sun");
const labelMoonn = document.querySelector(".label-change-moon");

const nextButton = document.createElement("button");
const prevButton = document.createElement("button");
const cardsWrapper = document.createElement("div"); //cards-wrapper

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
    link: "antiquity.html",
    path: "img/antiquity.webp",
    title: "Античная философия",
    text: `Существенные изменения социальных и экономических отношений,
    развитие культурной и научной жизни, критическое отношение к
    мифологии привели к первым попыткам древнегреческих философов
    рационально переосмыслить окружающий мир.`,
  },

  {
    link: "middle-age.html",
    path: "img/middle-ages.jpg",
    title: "Средневековая философия",
    text: `Основными проблемами философии Средних веков были следующие:
    проблема соотношения веры и разума, проблема доказательств
    бытия Бога, проблема универсалий, проблема бытия человека и
    свободы воли.`,
  },

  {
    link: "revival.html",
    path: "img/revival.jpeg",
    title: `Философия эпохи <br />Возрождения`,
    text: `Главной чертой гуманистического направления философии эпохи
    Возрождения было стремление уменьшить могущества Бога и
    доказать самоценность человека.`,
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
