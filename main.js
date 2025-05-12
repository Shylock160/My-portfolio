// Typing animation code
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
    setTimeout(typeLineTwo, 300);
  }
}

function typeLineTwo() {
  if (index2 < lineTwoText.length) {
    lineTwo.innerHTML += lineTwoText.charAt(index2);
    index2++;
    setTimeout(typeLineTwo, 100);
  }
}

// Form validation code
function setupFormValidation() {
  const form = document.getElementById("myForm");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    
    errorMessage.textContent = "";
    
    if (name === "") {
      errorMessage.textContent = "Name is required.";
      return;
    }
    
    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
    
    alert("Form submitted successfully!");
    form.reset();
  });
  
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  typeLineOne(); // Start typing animation
  setupFormValidation(); // Setup form validation
});

