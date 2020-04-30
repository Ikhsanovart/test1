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

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.navbar__button'),
        info = document.querySelector('.offers__navbar'),
        tabContent = document.querySelectorAll('.offers__blocks');
        
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('navbar__button')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break; 
                }
            }
        }
    });
});

/*for header*/

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.tabs__tab'),
        info = document.querySelector('.tabs'),
        tabContent = document.querySelectorAll('.content');
        
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('tabs__tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break; 
                }
            }
        }
    });
});