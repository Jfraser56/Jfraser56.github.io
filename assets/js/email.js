(function () {
  emailjs.init("service_9u7i91o");
})();

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "default_service",
      "template_7gu7ztr",
      contactForm,
      "_0Z1POnUBvZYSsnXa"
    )
    .then((res) => {
      for (
        let i = 0;
        i < contactForm.firstElementChild.children.length - 1;
        i++
      ) {
        contactForm.firstElementChild.children[i].firstElementChild.value = "";
      }
      contactForm.firstElementChild.children[2].firstElementChild.placeholder =
        "Email Sent!";
    })
    .catch((err) => console.log(err));
});
