const faqItems = document.getElementsByClassName('faq-list-item');
// console.log(faqItems);

for(let i=0; i<faqItems.length; i++){
  // console.log(faqItems[i]);
  const faq = faqItems[i];
  faq.onclick = toggle;
}

function toggle(e) {
  const ans = e.currentTarget.getElementsByClassName('faq-answer');
  // console.log(ans);
  // console.log(ans[0].classList);
  const currentAnswer = ans[0].classList;
  // console.log(currentAnswer[1]);
  if(!currentAnswer[1]){
    closeAll();
  } else {
    closeAll();
    currentAnswer.remove('closed');
  }
}

function closeAll() {
    // currentAnswer.add('closed');
    // console.log("clicked",e.currentTarget);
    const faqAnswers = document.getElementsByClassName('faq-answer');
    // console.log(faqAnswers);
    for(let i=0; i<faqAnswers.length; i++){
      const iss = faqAnswers[i].classList;
      // console.log(iss);
      // console.log(iss[1]);
      if(!iss[1]){
        iss.add('closed');
      }
    }
}
