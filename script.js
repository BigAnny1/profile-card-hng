//copy Email
const emailText = document.getElementById("email-text");
const copyButton = document.getElementById("copy-email-btn");

copyButton.addEventListener("click", () => {
  const email = emailText.textContent; //gets the content which is the email and puts into a const "email"
  navigator.clipboard.writeText(email).then(() => {
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy Email";
    }, 2000);
  });
});

//current time
const timeElement = document.getElementById("time");
function updateTime() {
  const currentTime = Date.now();
  timeElement.textContent = `${currentTime}⏱️`;
}

updateTime();
setInterval(updateTime, 1000);
