const modal = document.querySelector(".modal");
const closeModal = document.querySelectorAll(".close-icon");
const activeModal = document.querySelector(".button-modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const overlay = document.querySelectorAll(".overlay");
const sendModal = document.querySelector(".send-modal");

let openSendModal = () => {
  sendModal.style.visibility = "visible";
  modalWrapper.classList.add("modal-is-open");
};

let exitSendModal = () => {
  sendModal.style.visibility = "hidden";
  modalWrapper.classList.remove("modal-is-open");
};

let openModal = () => {
  modal.style.visibility = "visible";
  modalWrapper.classList.add("modal-is-open");
};

let exitModal = () => {
  modal.style.visibility = "hidden";
  modalWrapper.classList.remove("modal-is-open");
};

activeModal.addEventListener("click", () => openModal());

closeModal.forEach((item) => {
  item.addEventListener("click", () => exitModal());
  item.addEventListener("click", () => exitSendModal());
});

// closeModal.addEventListener("click", () => exitModal());
// closeModal.addEventListener("click", () => exitSendModal());

modal.addEventListener("click", (e) => {
  overlay.forEach((item) => {
    if (e.target === item) exitModal();
  });
});

sendModal.addEventListener("click", (e) => {
  overlay.forEach((item) => {
    if (e.target === item) exitSendModal();
  });
});

const firstInput = document.getElementById("first-input-modal");
const secondInput = document.getElementById("second-input-modal");
const buttonInModal = document.querySelector(".button-in-modal");
const formModal = document.querySelector(".form-modal");
const errorFirstLabel = document.querySelector(".error-first-label");
const errorSecondLabel = document.querySelector(".error-second-label");

errorFirstLabel.style.display = "none";
errorSecondLabel.style.display = "none";

regFirstInpSymbol = /[`~!@#$%\^&\*\(\)\+=:;"'\|\\\/\?\.,<>\[\]\{\}]/gi;
regNotFirstSymbol = /[-0-9_\s]/gi;
regNotSecondSymbol = /[\W\d_]/gi;
regOnlyLatin = /[а-я]/gi;
regEmailSymbol = /[@][\w\W]+[\.]/gi;
regNotSpecialSymbolBefore = /([\W_]@)|([\W_]\.)/gi;
regNotSpecialSymbolAfter = /(@[\W_])|(\.[\W_])/gi;
regNotrepeat = /\W{2,}/gi;

buttonInModal.addEventListener("click", (e) => {
  e.preventDefault();
  errorFirstLabel.style.display = "none";
  errorSecondLabel.style.display = "none";
  if (firstInput.value === "") {
    errorFirstLabel.style.display = "block";
    errorFirstLabel.textContent = "Запоните поле!";
    return false;
  }

  if (firstInput.value.match(regFirstInpSymbol)) {
    errorFirstLabel.style.display = "block";
    errorFirstLabel.textContent = "Недопустимые символы!";
    return false;
  }

  if (firstInput.value[0].match(regNotFirstSymbol)) {
    errorFirstLabel.style.display = "block";
    errorFirstLabel.textContent = "Имя начинается с буквы!";
    return false;
  }

  if (firstInput.value.match(regOnlyLatin)) {
    errorFirstLabel.style.display = "block";
    errorFirstLabel.textContent = "Только латинские буквы!";
    return false;
  }

  if (firstInput.value.length > 50) {
    errorFirstLabel.style.display = "block";
    errorFirstLabel.textContent = "Не больше 50 символов!";
    return false;
  }

  if (secondInput.value === "") {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Запоните поле!";
    return false;
  }

  if (secondInput.value[0].match(regNotSecondSymbol)) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Email начинается с лат. буквы!";
    return false;
  }

  if (secondInput.value.match(regOnlyLatin)) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Только латинские буквы!";
    return false;
  }

  if (!secondInput.value.match(regEmailSymbol)) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Отсутствуют символы @ или .";
    return false;
  }

  if (
    secondInput.value.match(regNotSpecialSymbolBefore) ||
    secondInput.value.match(regNotSpecialSymbolAfter)
  ) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Cпецсимвол не том месте!";
    return false;
  }

  if (secondInput.value.length > 63) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Не больше 63 символов!";
    return false;
  }

  if (secondInput.value.match(regNotrepeat)) {
    errorSecondLabel.style.display = "block";
    errorSecondLabel.textContent = "Спецсимволы идут подряд!";
    return false;
  }

  console.log("данные отправлены");
  formModal.reset();
  setTimeout(exitModal, 2000);
  setTimeout(openSendModal, 2500);
});
