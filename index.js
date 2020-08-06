const faqItems = document.getElementsByClassName('faq-list-item');

for(let i=0; i<faqItems.length; i++){
  const faq = faqItems[i];
  faq.onclick = toggle;
}

function toggle(e) {
  // The faq item which has been clicked
  const targetFaqItem = e.currentTarget.getElementsByClassName('faq-answer').classList;
  // if targetFaqItem doesn't have closed in its class name
  // i.e. it is not closed then close it
  if(!targetFaqItem[1]){
    closeAll();
  } else {
    closeAll();
    targetFaqItem.remove('closed');
  }
}

function closeAll() {
    const faqAnswers = document.getElementsByClassName('faq-answer');
    for(let i=0; i<faqAnswers.length; i++){
      const faqAnswerClassNames = faqAnswers[i].classList;
      if(!faqAnswerClassNames[1]){
        faqAnswerClassNames.add('closed');
      }
    }
}
