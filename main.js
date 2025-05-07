const lineOneText = "The future is launching";
const lineTwoText = "Be part of something amazing";

const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");

let index1 = 0;
let index2 = 0;

function typeLineOne() {
  if (index1 < lineOneText.length) {
    lineOne.innerHTML += lineOneText.charAt(index1);
    index1++;
    setTimeout(typeLineOne, 100);
  } else {
    setTimeout(typeLineTwo, 300); // pause before starting second line
  }
}

function typeLineTwo() {
  if (index2 < lineTwoText.length) {
    lineTwo.innerHTML += lineTwoText.charAt(index2);
    index2++;
    setTimeout(typeLineTwo, 100);
  }
}

window.onload = typeLineOne;
