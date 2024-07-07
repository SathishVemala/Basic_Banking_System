document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent successfully!");
  });
});
function performOperation() {
  alert("Operation button clicked");
}
function showSuccessMessage() {
  const successMessage = document.getElementById('SuccessMessage');
  
  if (successMessage) {
      successMessage.style.display = 'block';
  } else {
      console.error('Error: Could not find element with id "SuccessMessage"');
  }

  setTimeout(() => {
      if (successMessage) {
          successMessage.style.display = 'none';
      }
  }, 3000); // Adjust delay time as needed
}
  
  
  
  
     