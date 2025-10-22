const form = document.querySelector("form");
const fullName = document.querySelector("[data-testid='test-contact-name']");
const email = document.querySelector("[data-testid='test-contact-email']");
const subject = document.querySelector("[data-testid='test-contact-subject']");
const message = document.querySelector("[data-testid='test-contact-message']");
const successMsg = document.querySelector("[data-testid='test-contact-success']");

const errorName = document.querySelector(
  "[data-testid='test-contact-error-name']"
);
const errorEmail = document.querySelector(
  "[data-testid='test-contact-error-email']"
);
const errorSubject = document.querySelector(
  "[data-testid='test-contact-error-subject']"
);
const errorMessage = document.querySelector(
  "[data-testid='test-contact-error-message']"
);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSubject.textContent = "";
  errorMessage.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  if (fullName.value.trim() === "") {
    errorName.textContent = "Full name is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent =
      "Please enter a valid email address (e.g., name@example.com).";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    errorSubject.textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value.trim() === "") {
    errorMessage.textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters long.";
    isValid = false;
  }

  // ✅ If all validations pass
  if (isValid) {
    successMsg.textContent = "✅ Your message has been successfully submitted!";
    form.reset();

    // 🕒 Remove success message after 3 seconds (3000ms)
    setTimeout(() => {
      successMsg.textContent = "";
    }, 3000);
  }
});
