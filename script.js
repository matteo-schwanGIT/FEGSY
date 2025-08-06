const users = {
  "OwnerMatteo": { password: "B2009-RvMJ", role: "owner" },
  "Admin1": { password: "admin123", role: "admin" },
  "Spieler": { password: "spieler", role: "player" }
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = users[username];
  const errorField = document.getElementById("login-error");

  if (!user || user.password !== password) {
    errorField.textContent = "Zugangsdaten ungültig!";
    return;
  }
  errorField.textContent = "";

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("desktop").classList.remove("hidden");
  document.getElementById("user-name").textContent = username;
  document.getElementById("user-role").textContent =
    user.role === "owner" ? "👑" :
    user.role === "admin" ? "🛠️" : "🎮";
}

function openApp(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeApp(id) {
  document.getElementById(id).classList.add("hidden");
}
