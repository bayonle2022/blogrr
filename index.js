
const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list');

hamburger.addEventListener('click', () => {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
const hamburger1 = document.querySelector('.hamburger');
let moved = false;

hamburger1.addEventListener('click', () => {
  if (!moved) {
    hamburger1.style.left = '200px'; // shift right by 20px
    moved = true;
  } else {
    hamburger1.style.left = '0px'; // go back to normal
    moved = false;
  }
});

