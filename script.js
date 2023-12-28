document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const btnGroup = document.querySelector(".btn-group");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  yesBtn.addEventListener("click", function () {
      // Remove all buttons when "Yes" is pressed
      btnGroup.innerHTML = "";
      question.innerHTML = "Yay, looking forward to it!";
      gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  });

  document.addEventListener("mousemove", function (e) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
  });
});

//when desktop is used
/* 
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const btnGroup = document.querySelector(".btn-group");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  yesBtn.addEventListener("click", function () {
      // Remove all buttons when "Yes" is pressed
      btnGroup.innerHTML = "";
      question.innerHTML = "Yay, see you on the 18th!";
      gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  });

  noBtn.addEventListener("mouseover", function () {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
  });
});

*/