function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // Simple demo login (future mein admin system add hoga)
  window.location.href = "loading.html";
}