const faqList = document.getElementById('faq-list');

faqList.addEventListener('click', function(event) {
  // The faq item which has been clicked
  const clickedElement = event.target;

  // If the clicked element is faq-question then get its sibling answer element
  if(clickedElement.className === 'faq-question'){
    targetFaqAnswer = clickedElement.nextElementSibling.classList;

    // If the answer element is openend then close it
    // if it is closed then on clicking close all except the target
    // answer element
    if(!targetFaqAnswer.contains('closed')){
      targetFaqAnswer.add('closed');
    } else {
      closeAll();
      targetFaqAnswer.remove('closed');
    }
  }
});

function closeAll() {
    const faqAnswers = document.getElementsByClassName('faq-answer');
    for(let i=0; i<faqAnswers.length; i++){
      const faqAnswerClassNames = faqAnswers[i].classList;
      if(!faqAnswerClassNames[1]){
        faqAnswerClassNames.add('closed');
      }
    }
}
