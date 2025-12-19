const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_btnkw9", "template_txcyzuk", form)
      .then(() => {
        return emailjs.sendForm("service_btnkw9", "template_zytrgo", form);
      })
      .then(() => {
        alert("Message sent successfully! ✅");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong ❌");
      });
  });
}
