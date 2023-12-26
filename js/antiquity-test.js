const questionWrapper = document.querySelector(".questions-wrapper");
const wrapperTest = document.querySelector(".background-wrapper-tests");

//const startTestBtn = document.createElement("button");

const nextBtn = document.querySelector(".test-btn-next");
const prevBtn = document.querySelector(".test-btn-prev");
const backBtn = document.querySelector(".test-btn-back");
const againBtn = document.querySelector(".test-btn-again");

const quesions = [
  {
    question: "1. Кто считается первым античным философом?",
    fisrtAnswer: "Гераклит",
    secondAnswer: "Фалес",
    thirdAnswer: "Демокрит",
  },

  {
    question:
      "2. Какой период в античной философии называют также периодом большого синтеза?",
    fisrtAnswer: "Классический",
    secondAnswer: "Гуманистический",
    thirdAnswer: "Религиозный",
  },

  {
    question:
      "3. Каких вопросов в большей части касалась греческая натурфилософия?",
    fisrtAnswer: "Этики и эстетики",
    secondAnswer: "Логики",
    thirdAnswer: "Космогонии и космологии",
  },

  {
    question: "4. Кто из этих философов относился к пифагорейцам?",
    fisrtAnswer: "Алкмеон Кротонский",
    secondAnswer: "Кратил",
    thirdAnswer: "Анаксимен",
  },

  {
    question: "5. Выберите две крупнейшие сократические школы.",
    fisrtAnswer: "Киники и киренаики",
    secondAnswer: "Платоники и киники",
    thirdAnswer: "Платоники и мегерская школа",
  },

  {
    question: "6. Представителями чьей школы являлись перипатетики?",
    fisrtAnswer: "Платона",
    secondAnswer: "Сократа",
    thirdAnswer: "Аристотеля",
  },

  {
    question: "7. В какой период появилась философия скептицизма?",
    fisrtAnswer: "В натурфилософский",
    secondAnswer: "В эллинистический",
    thirdAnswer: "В гуманистический",
  },

  {
    question: "8. Кто относился к римской философии?",
    fisrtAnswer: "Римляне",
    secondAnswer: "Римляне и греки — представители римских школ",
    thirdAnswer: "Представители римских школ по всему миру",
  },

  {
    question: "9. Когда существовала предфилософская традиция?",
    fisrtAnswer: "В VIII—VII веках до нашей эры",
    secondAnswer: "В VI—V веках до нашей эры",
    thirdAnswer: "В IV—III веках до нашей эры",
  },

  {
    question: "10. Кого принято считать последним античным философом?",
    fisrtAnswer: "Оригена",
    secondAnswer: "Клавдиана",
    thirdAnswer: "Боэция",
  },
];

let rightAnswers = [
  "Фалес",
  "Классический",
  "Космогонии и космологии",
  "Алкмеон Кротонский",
  "Платоники и киники",
  "Аристотеля",
  "В эллинистический",
  "Римляне и греки — представители римских школ",
  "В VIII—VII веках до нашей эры",
  "Боэция",
];

let userAnswers = [];
let countRightAnswers = 0;

let index = 0;

function playTest() {
  let renderQuestions = () => {
    for (let i = 0; i < quesions.length; i++) {
      if (index === i) {
        questionWrapper.innerHTML = `
          <h3 class="question-title"
            >${quesions[i].question}</h3
          >
          <div class="answers-group">
            <div class="answer-input-group">
              <input type="radio" name="test-name" class="antiquity-item-text" id="first-answer" value="${quesions[i].fisrtAnswer}">
              <label for="first-answer" class="label-test" id="label-first-answer">${quesions[i].fisrtAnswer}</label>
              <label for="first-answer" class="error-label-test" id="label-first-answer">Нужно ответить на вопрос, чтобы идти дальше!</label>
            </div>
            
            <div class="answer-input-group">
              <input type="radio" name="test-name" class="antiquity-item-text" id="second-answer" value="${quesions[i].secondAnswer}">
              <label for="second-answer" class="label-test" id="label-second-answer">${quesions[i].secondAnswer}</label>
            </div>
  
            <div class="answer-input-group">
              <input type="radio" name="test-name" class="antiquity-item-text" id="third-answer" value="${quesions[i].thirdAnswer}">
              <label for="third-answer" class="label-test" id="label-third-answer">${quesions[i].thirdAnswer}</label>
            </div>
        `;
      }
    }

    if (index > 0 && index < quesions.length - 1) {
      nextBtn.style.display = "flex";
      prevBtn.style.display = "flex";
      backBtn.style.display = "none";
      againBtn.style.display = "none";
    }

    if (index === 0) {
      nextBtn.style.display = "flex";
      prevBtn.style.display = "none";
      backBtn.style.display = "none";
      againBtn.style.display = "none";
    }

    if (index === quesions.length) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      backBtn.style.display = "flex";
      againBtn.style.display = "flex";
    }
  };

  renderQuestions();

  let checkAnswers = () => {
    let inp;

    const inputs = [...questionWrapper.elements].filter(
      (input) => input.checked
    );

    inputs.forEach((input) => {
      inp = input.value;
    });
    userAnswers[index] = inp;

    console.log(userAnswers);
  };

  let ahead = (arr) => {
    const inputs = [...questionWrapper.elements];

    inputs.forEach((input) => {
      inp = input.value;
      arr.forEach((item) => {
        if (item === input.value) input.checked = true;
      });
    });
  };

  let comeBack = () => {
    const inputs = [...questionWrapper.elements];
    console.log("tak");

    inputs.forEach((input) => {
      console.log(input.value);
      if (input.value === userAnswers[index]) {
        console.log(input.value);
        input.checked = true;
        console.log(input.checked);
      }
    });
    console.log(userAnswers);
  };

  let comparisonOfAnswers = (firstArr, secondArr) => {
    for (let i = 0; i < 10; i++) {
      if (firstArr[i] === secondArr[i]) countRightAnswers++;
    }
  };

  // nextBtn.addEventListener("click", () => {
  //   let count = 0;
  //   const inputs = [...questionWrapper.elements];
  //   const errTest = document.querySelector(".error-label-test");
  //   for (i = 0; i < inputs.length; i++) {
  //     console.log("I'm here");
  //     if (inputs[i].checked === false) count++;
  //     if (count === 3) {
  //       errTest.style.display = "block";
  //       return false;
  //     }
  //   }

  //   checkAnswers();
  //   index++;
  //   renderQuestions();
  //   ahead(userAnswers);

  //   if (index === quesions.length) {
  //     comparisonOfAnswers(userAnswers, rightAnswers);
  //     console.log(countRightAnswers);

  //     questionWrapper.innerHTML = `
  //       <h3 class="question-title" style="text-align: center">Поздравляем! Тест завершен!<br>Ваш результат: ${countRightAnswers} из 10</h3
  //       >
  //     `;
  //   }
  // });

  nextBtn.onclick = () => {
    let count = 0;
    const inputs = [...questionWrapper.elements];
    const errTest = document.querySelector(".error-label-test");
    for (i = 0; i < inputs.length; i++) {
      console.log("I'm here");
      if (inputs[i].checked === false) count++;
      if (count === 3) {
        errTest.style.display = "block";
        return false;
      }
    }

    checkAnswers();
    index++;
    renderQuestions();
    ahead(userAnswers);

    if (index === quesions.length) {
      comparisonOfAnswers(userAnswers, rightAnswers);
      console.log(countRightAnswers);

      questionWrapper.innerHTML = `
        <h3 class="question-title" style="text-align: center">Поздравляем! Тест завершен!<br>Ваш результат: ${countRightAnswers} из 10</h3
        >
      `;
    }
  };

  // prevBtn.addEventListener("click", () => {
  //   index--;
  //   renderQuestions();
  //   comeBack(userAnswers);
  // });
  prevBtn.onclick = () => {
    index--;
    renderQuestions();
    comeBack(userAnswers);
  };
}

playTest();

againBtn.addEventListener("click", () => {
  console.log("again");
  userAnswers.length = 0;
  index = 0;
  countRightAnswers = 0;
  playTest();
});
