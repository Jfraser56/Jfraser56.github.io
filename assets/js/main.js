const navButtons = document.querySelectorAll(".nav-btn");
const home = document.querySelector("#header");
const about = document.querySelector("#about-marker");
const projects = document.querySelector("#projects-marker");
const skills = document.querySelector("#skills-marker");
const contact = document.querySelector("#contact-marker");

console.log(navButtons);

const handleNav = (e) => {
  console.log("asdf");
  switch (e.target.id) {
    case "home-button":
      home.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "about-link":
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "projects-link":
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "skills-link":
      skills.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "contact-link":
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
  }
};

navButtons.forEach((button) => {
  button.addEventListener("touchstart", handleNav);
  button.addEventListener("click", handleNav);
});

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    noOpenerFade: true,
    alignment: "center",
    detach: false,
  });

  // Nav.

  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo h1").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);
