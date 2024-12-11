function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        let element = document.getElementById(elementId)
        if (element) {
            element.style.color = 'red'
        }
    }, delay)
}

changeStyleDelayed('myElement', 2000)
