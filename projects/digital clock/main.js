const hour = document.getElementById("hour")
const min = document.getElementById("min")
const second = document.getElementById("second")


setInterval(() => {
    const currentTime = new Date()


    hour.innerHTML = currentTime.getHours()
    min.innerHTML = currentTime.getMinutes()
    second.innerHTML = currentTime.getSeconds()
}, 1000)


    