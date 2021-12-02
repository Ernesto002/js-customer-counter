let count = 0
let currentCount = document.getElementById("current-count")
let save = document.getElementById("previous-customers")


function addCustomer() {
    count += 1
    currentCount.textContent = count
}

function saveCount() {
    let previousEntries = count + " - "
    save.textContent += previousEntries
}