window.addEventListener("load",()=>{
    let secondHand = document.getElementById("second-hand-cont")
    let minuteHand = document.getElementById("minute-hand-cont")
    let hourHand = document.getElementById("hour-hand-cont")

    const date = new Date()
    let second = (date.getSeconds() * 6) >= 180 ? (date.getSeconds() * 6) - 180 : (date.getSeconds() * 6) + 180
    let minute = (date.getMinutes() * 6) >= 180 ? (date.getMinutes() * 6) - 180 : (date.getMinutes() * 6) + 180
    let hour = date.getHours() > 12 ?  (date.getHours() * 30) >= 180 ? (date.getHours() * 30) - 180 : (date.getHours() * 30) + 180: (date.getHours() * 30) >= 180 ? (date.getHours() * 30) - 180 : (date.getHours() * 30) + 180 

    secondHand.style.transform = `rotate(${second}deg)`
    minuteHand.style.transform = `rotate(${minute}deg)`
    hourHand.style.transform = `rotate(${hour}deg)`

    setInterval(() => {
        const date = new Date()
        let second = (date.getSeconds() * 6) >= 180 ? (date.getSeconds() * 6) - 180 : (date.getSeconds() * 6) + 180
        let minute = (date.getMinutes() * 6) >= 180 ? (date.getMinutes() * 6) - 180 : (date.getMinutes() * 6) + 180
        let hour = date.getHours() > 12 ?  (date.getHours() * 30) >= 180 ? (date.getHours() * 30) - 180 : (date.getHours() * 30) + 180: (date.getHours() * 30) >= 180 ? (date.getHours() * 30) - 180 : (date.getHours() * 30) + 180 

        secondHand.style.transform = `rotate(${second}deg)`
        minuteHand.style.transform = `rotate(${minute}deg)`
        hourHand.style.transform = `rotate(${hour}deg)`
    }, 1000);
})