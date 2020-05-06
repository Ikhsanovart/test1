var acc = document.getElementsByClassName("faq__question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the faq_answer */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active faq_answer */
    var faq_answer = this.nextElementSibling;
    if (faq_answer.style.display === "block") {
      faq_answer.style.display = "none";
    } else {
      faq_answer.style.display = "block";
    }
  });
}