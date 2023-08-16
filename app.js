

let tittle = document.getElementById("tittle");
let nameField = document.getElementById("nameField");
let signInBtn = document.getElementById("signInBtn");
let signUpBtn = document.getElementById("signUpBtn");
const formBox = document.getElementById("form-box");
let paragraph = null; // Initialize paragraph variable

signInBtn.addEventListener("click", function() {
  nameField.style.maxHeight = "0";
  tittle.textContent = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");

  // Create and style the <p> tag if it doesn't exist
  if (!paragraph) {
    paragraph = document.createElement("p");
    paragraph.textContent = "Forgot password ";
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.textContent = "click here";
    paragraph.appendChild(anchor);
    paragraph.classList.add("custom-paragraph"); // Add CSS class

    // Append the <p> tag to the container element
    formBox.appendChild(paragraph);
    
    // Delay setting max height to show the paragraph
    setTimeout(function() {
      paragraph.style.maxHeight = "40px";
    }, 10);
  }
});

signUpBtn.addEventListener("click", function() {
  nameField.style.maxHeight = "40px";
  tittle.textContent = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");

  // Remove the <p> tag if it exists
  if (paragraph) {
    paragraph.style.maxHeight = "0";
    setTimeout(function() {
      formBox.removeChild(paragraph);
      paragraph = null; // Reset paragraph variable
    }, 50); // Wait for the transition to complete before removing the element
  }
});
