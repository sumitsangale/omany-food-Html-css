console.log("welcome Js");

///////////////////////////////////////////////////////////
///make current year updation
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
// console.log(currentYear);

///////////////////////////////////////////////////////////
///make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerNav.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
///smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (links) {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const href = links.getAttribute("href");
    // console.log(href);

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to section links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (links.classList.contains("main-nav-link")) {
      headerNav.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
///STICKY NAVIGATION
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  }
);

obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
