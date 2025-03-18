// For year in footer //
const yearEl = document.querySelector(".year");

const year = new Date().getFullYear();
yearEl.textContent = year;

////////////////////////////////////////////////////////////
// For Mobile Navigation Menu //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////
// For Smooth Scroll //
const allLinksEl = document.querySelectorAll("a:link");

allLinksEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll to top
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Closing mobile navigation menu
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// For Sticky Menu
const heroSectionEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // For only viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSectionEl);

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
