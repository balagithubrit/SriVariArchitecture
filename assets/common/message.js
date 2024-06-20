function submitForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!validateForm()) return false;

  // Show "Submitting..." message
  document.getElementById("submittingMsg").style.display = "inline";

  setTimeout(function () {
    // Simulated response received, you can replace this with actual logic
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset(); // Reset form after successful submission
    document.getElementById("submittingMsg").style.display = "none"; // Hide "Submitting..." message
  }, 2000); // Simulated 2 second delay

  return false; // Prevent actual form submission for demonstration purposes
}

// Function to validate form fields
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else {
    // Basic email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  return isValid;
}

// Function to clear error message when user starts typing in a field
document.getElementById("name").addEventListener("input", function () {
  document.getElementById("nameError").textContent = "";
});

document.getElementById("email").addEventListener("input", function () {
  document.getElementById("emailError").textContent = "";
});

document.getElementById("message").addEventListener("input", function () {
  document.getElementById("messageError").textContent = "";
});
document.getElementById("message-icon").addEventListener("click", function () {
  var messageContainer = document.getElementById("message-container");
  var icon = document.querySelector("#message-icon i");

  if (messageContainer.style.display === "none") {
    messageContainer.style.display = "block";
    document.getElementById("messageError").textContent = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    icon.classList.remove("ri-message-2-line");
    icon.classList.add("ri-close-line");
  } else {
    messageContainer.style.display = "none";
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-message-2-line");
  }
});
