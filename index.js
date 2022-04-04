const faqList = document.getElementById("faq-list");

faqList.addEventListener("click", function (event) {
  const clickedElement = event.target;

  const faqQuestionElement = clickedElement.closest(".faq-question");

  let targetFaqAnswer = faqQuestionElement.nextElementSibling.classList;

  if (!targetFaqAnswer.contains("closed")) {
    targetFaqAnswer.add("closed");
  } else {
    closeAll();
    targetFaqAnswer.remove("closed");
  }
});

function closeAll() {
  const faqAnswers = document.getElementsByClassName("faq-answer");

  // convert faqAnswers from HTMLcolletion to an array and loop
  [...faqAnswers].forEach((answer) => {
    answerClasses = answer.classList;
    if (!answerClasses.contains("closed")) {
      answerClasses.add("closed");
    }
  });
}
