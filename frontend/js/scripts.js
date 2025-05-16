// JavaScript for interactive features
console.log("Health & Fitness Website");

// Modal functionality
function showDetails(modalId) {
  document.getElementById(modalId + "Details").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formId = this.id;

      // Basic form validation
      let isValid = true;
      const inputs = this.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        if (input.required && !input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (isValid) {
        // Handle different form submissions
        switch (formId) {
          case "registerForm":
            handleRegistration(this);
            break;
          case "contactForm":
            handleContact(this);
            break;
          case "progressForm":
            handleProgress(this);
            break;
          default:
            console.log("Form submitted:", formId);
        }
      }
    });
  });
});

// Form handlers
function handleRegistration(form) {
  const full_name = form.querySelector("#full_name").value;
  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;
  const gender = form.querySelector("#gender").value;
  const dob = form.querySelector("#dob").value;
  const goals = form.querySelector("#goals").value;

  fetch("http://localhost:3001/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ full_name, email, password, gender, dob, goals }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((err) => Promise.reject(err));
      }
      return res.json();
    })
    .then((data) => {
      if (data.message === "Registration successful!") {
        alert("Registration successful! Please login.");
        window.location.href = "login.html";
      } else {
        alert(data.message || "Registration failed.");
      }
    })
    .catch((err) => {
      console.error("Registration error:", err);
      alert(`Registration failed: ${err.message || "Unknown error"}`);
    });
}

function handleContact(form) {
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;
  console.log("Contact form:", { name, email, message });
  // Add actual contact form logic here
  alert("Thank you for your message. We will get back to you soon!");
}

function handleProgress(form) {
  const activity = form.querySelector("#activity").value;
  const meals = form.querySelector("#meals").value;
  console.log("Progress update:", { activity, meals });
  // Add actual progress tracking logic here
  alert("Progress has been recorded!");
}

// Navigation highlight
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  highlightCurrentPage();
});
