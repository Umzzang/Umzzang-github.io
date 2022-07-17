const form = document.getElementById("login-form")

const savedUserName = localStorage.getItem("username")

const user = document.getElementById("user")
console.log(savedUserName)
if (savedUserName) {
  const span = document.querySelector("div span")
  
  span.innerText = `Hello ${savedUserName}`
  form.classList.add("hidden")
  user.classList.remove("hidden")
}

function setUser (event) {
  event.preventDefault()
  const userName = event.target.querySelector("input").value
  event.target.querySelector("input").value = ''
  const span = document.querySelector("div span")
  
  span.innerText = `Hello ${userName}`
  localStorage.setItem("username", userName)
  form.classList.add("hidden")
  user.classList.remove("hidden")
}

form.addEventListener("submit", setUser)


const btn = document.querySelector("div button")

function logout(event) {
  event.preventDefault()
  localStorage.removeItem("username")
  const form = document.getElementById("login-form")
  form.classList.remove("hidden")
  user.classList.add("hidden")
}
btn.addEventListener("click", logout)