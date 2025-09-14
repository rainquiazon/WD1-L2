// Get Started -> go to signup
function getStarted() {
  window.location.href = "signup.html";
}

// Signup
function signup() {
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  if (!username || !password) {
    alert("Fill out all fields!");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Account created! Please log in.");
  window.location.href = "login.html";
}

// Login
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (username === savedUser && password === savedPass) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password!");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out!");
  window.location.href = "login.html";
}
    
  