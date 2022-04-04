const faqList = document.getElementById("faq-list");

faqList.addEventListener("click", function (event) {
  const clickedElement = event.target;

  // click may be on the button or any other child elements like the svg or path
  // therefore we need to find the parent element which has "faq-question" class
  const faqQuestionElement = clickedElement.closest(".faq-question");
  // for every question we have a sibling answer element which need to be shown
  const targetFaqAnswer = faqQuestionElement.nextElementSibling;

  const svgIcon = faqQuestionElement.querySelector(".svg-icon");

  addClassToCurrent(targetFaqAnswer, "faq-answer");
  addClassToCurrent(svgIcon, "svg-icon");
});

// function to add "closed" class to the targetElement
function addClassToCurrent(targetElement, targetElementClassname) {
  const classList = targetElement.classList;

  // if the element is not closed then close it
  // else close every element and then open the current element
  if (!classList.contains("closed")) {
    classList.add("closed");
  } else {
    addClassToAll(targetElementClassname);
    classList.remove("closed");
  }
}

// function to add "closed" class to all element with elementClassName
function addClassToAll(elementClassName) {
  const targetElements = document.getElementsByClassName(elementClassName);

  // convert targetElements from HTMLcolletion to an array and loop
  [...targetElements].forEach((element) => {
    classnames = element.classList;
    if (!classnames.contains("closed")) {
      classnames.add("closed");
    }
  });
}
