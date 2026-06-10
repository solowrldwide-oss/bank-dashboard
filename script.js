const EMAIL = "theethanerivers@gmail.com";
const PASSWORD = "Incredibleman";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === EMAIL && password === PASSWORD) {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login details";
  }
}

function authCheck() {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}