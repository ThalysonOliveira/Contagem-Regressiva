(()=>{
    const $ = q => document.querySelector(q)
    const daysContainer = $('#days')
    const hoursContainer = $('#hours')
    const minutesContainer = $('#minutes')
    const secondsContainer = $('#seconds')
    const newyearContainer = $('#year')
    const spinnerLoading = $('#loading')
    const countdownContainer = $('#countdown')
    const nextyear = new Date().getFullYear() +1
    const newYearTime = new Date(`January 01 ${nextyear} 00:00:00`)
    newyearContainer.textContent = nextyear

    const getTimeUnit = unit => unit <10 ? '0' + unit: unit


    const isertcountdownValues = ({days, hours, minutes, seconds})=>{
        daysContainer.textContent = getTimeUnit(days)
        hoursContainer.textContent = getTimeUnit(hours)
        minutesContainer.textContent = getTimeUnit(minutes)
        secondsContainer.textContent = getTimeUnit(seconds)
    }

    const updateCountdown = () =>{
        const currentTime = new Date()
        const difference = newYearTime - currentTime
        const days =  Math.floor(difference / 1000 / 60 / 60 / 24)
        const hours = Math.floor(difference /1000 / 60 / 60) % 24
        const minutes = Math.floor(difference /1000 / 60) % 60
        const seconds = Math.floor(difference /1000) % 60

        isertcountdownValues({days, hours, minutes, seconds})
    }

    const handleCountdownDisplay = ()=>{
        spinnerLoading.remove()
        countdownContainer.style.display = 'flex'
    }

    setTimeout(handleCountdownDisplay,1000)
    setInterval(updateCountdown, 1000)
})()