// Part 1: Event Handling
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", () => {
  message.textContent = "Hello 👋 You clicked the button!";
});

// Part 2: Interactive Elements
const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
document.querySelector(".question").addEventListener("click", function () {
  this.nextElementSibling.classList.toggle("hidden");
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Check empty fields
  if (name === "" || email === "" || password === "") {
    formMsg.textContent = "⚠️ All fields are required!";
    formMsg.style.color = "red";
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMsg.textContent = "⚠️ Please enter a valid email!";
    formMsg.style.color = "red";
    return;
  }

  // Password validation
  if (password.length < 6) {
    formMsg.textContent = "⚠️ Password must be at least 6 characters!";
    formMsg.style.color = "red";
    return;
  }

  // Success
  formMsg.textContent = "✅ Form submitted successfully!";
  formMsg.style.color = "green";
});
