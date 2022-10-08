const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const border = document.querySelector(".border");
iconMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-block");
    document.body.classList.add("overfl-hid");
    line_1.classList.toggle("active-l-1");
    line_2.classList.toggle("active-l-2");
    line_3.classList.toggle("active-l-3");
    border.classList.toggle("border");
});

const article = document.querySelector(".article");
const authorStudent = document.querySelector(".about-us__authors");
const btnToTop = document.querySelector(".btn-to-top");
window.addEventListener('scroll', function() {
    if (window.scrollY >= document.documentElement.clientHeight * 0.72) {
      window.requestAnimationFrame(function() {
          article.classList.add('article__active');
      });
    }
    if (window.scrollY >= document.documentElement.clientHeight * 8.76) {
        window.requestAnimationFrame(function() {
            authorStudent.classList.add('about-us__authors__anime');
        });
    }
    if (window.scrollY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.4) {
        window.requestAnimationFrame(function() {
            btnToTop.classList.add('btn-to-top-show-lg');
        });
    }
    if (window.scrollY <= (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.4) {
        window.requestAnimationFrame(function() {
            btnToTop.classList.remove('btn-to-top-show-lg');
        });
    }
    if (window.scrollY >= (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.89) {
        window.requestAnimationFrame(function() {
            btnToTop.classList.add('btn-to-top-show-xs-sm-md');
        });
    }
    if (window.scrollY <= (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.89) {
        window.requestAnimationFrame(function() {
            btnToTop.classList.remove('btn-to-top-show-xs-sm-md');
        });
    }
});


let links = document.querySelectorAll(".menu__link[data-goto]");

if (links.length > 0) {
    links.forEach(item => {
        item.addEventListener("click", menuLinkClick)
    });
    function menuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToSection = document.querySelector(menuLink.dataset.goto);
            const goToSectionValue = goToSection.getBoundingClientRect().top + pageYOffset;
            menu.classList.remove("menu-block");
            iconMenu.classList.remove("hiden");
            document.body.classList.remove("overfl-hid");
            line_1.classList.remove("active-l-1");
            line_2.classList.remove("active-l-2");
            line_3.classList.remove("active-l-3");
            border.classList.add("border");
            window.scrollTo ({
                top: goToSectionValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}