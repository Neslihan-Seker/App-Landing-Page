/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    //when the scroll is greater than 80 viewport height, addthe scroll -header class to the header tag
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll" , scrollHeader)



/*=============== FAQ'S ACCORDION ===============*/
let accordion = document.querySelector(".accordion__content");
let header = accordion.querySelectorAll(".accordion__header");
let item = accordion.querySelectorAll(".accordion__item");
header.forEach(headers => 
    headers.addEventListener("click", toggleAccordion));
    function toggleAccordion()
    {
        thisItem = this.parentNode;
        item.forEach(items => {
            if(thisItem == items)
            {
                thisItem.classList.toggle('collapsed');
                return;
            }
            items.classList.remove('collapsed');
        })
    }

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")
function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id")
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
              }
              else
              {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
              }
    })
}
window.addEventListener("scroll", scrollActive)