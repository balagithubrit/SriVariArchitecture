function submitForm() {
  if (!validateForm()) return false;
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  sendMessage(name, email, message);

  return false;
}

async function sendMessage(name, email, message) {
  const submittingMsg = document.getElementById("submittingMsg");
  const successResponse = document.getElementById("successResponse");
  submittingMsg.textContent = "Sending...";
  const response = await fetch(
    "https://qhfspffzlc.execute-api.ap-south-1.amazonaws.com/send-mail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    }
  );
  document.getElementById("myForm").reset()
  if (!response.ok || response?.status == 500) {
    submittingMsg.textContent = "Something Went Wrong.";
  } else if (response.status == 200) {
    successResponse.textContent =
      "Thank you! Your message has been successfully received. We will get back to you shortly.";
    submittingMsg.textContent = "";
  }
}

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  return isValid;
}

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
    document.getElementById("submittingMsg").textContent = "";
    document.getElementById("successResponse").textContent = "";
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
