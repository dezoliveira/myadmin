const btnLogin = document.getElementById('btn-login')
const email = document.getElementById('login-mail')
const togglePassword = document.getElementById("togglePassword")
const password = document.getElementById("login-password")

togglePassword.addEventListener("click", function () {
  const type = password.getAttribute("type") === "password" ? "text" : "password"
  password.setAttribute("type", type)
  this.classList.toggle('fa-eye')
  this.classList.toggle('fa-eye-slash')
});

email.value = "usuarioteste@gmail.com"
password.value = "12345678"

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = './src/pages/main.html'
})