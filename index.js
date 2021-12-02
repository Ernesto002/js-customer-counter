let count = 0
let currentCount = document.getElementById("current-count")
let save = document.getElementById("save-bttn")


function addCustomer() {
    count += 1
    currentCount.textContent = count
}