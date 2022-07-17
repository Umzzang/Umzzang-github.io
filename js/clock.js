function setClock () {
  const dayObj = {0:'일', 1:'월', 2:'화', 3:'수', 4:'목' ,5:'금' ,6:'토'}
  const dateInfo = new Date()
  const year = dateInfo.getFullYear()
  const month = dateInfo.getMonth() + 1
  const date = dateInfo.getDate()
  const day = dayObj[dateInfo.getDay()]
  const hour = dateInfo.getHours()
  const minute = String(dateInfo.getMinutes()).padStart(2, "0")
  const second = String(dateInfo.getSeconds()).padStart(2, "0")
  document.getElementById("time").innerText = `${hour} : ${minute} : ${second}`
  document.getElementById("date").innerText = `${year}년 ${month}월 ${date}일 (${day})`
}


setClock()
setInterval(setClock, 1000)