import dotenv from "dotenv"

dotenv.config()

const APIkey = process.env.API_KEY
console.log(APIkey)

function onGeoOk(position) {
  console.log(position)
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const div = document.getElementById("weather")
  const p = div.querySelector("p")
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
  .then(res => res.json())
  .then(data => {
    p.innerText = `${data.name} : ${data.weather[0].main}`
    
  })
}


function onGeoError() {
  alert("can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)