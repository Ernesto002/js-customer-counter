// Initialize "current-count" within JavaScript to 0
let count = 0

// currentCount variable grabs the "current-count" element from the DOM
let currentCount = document.getElementById("current-count")

// save variable grabs the "previous-customers" from the DOM
let save = document.getElementById("previous-customers")

// addCustomer function adds 1 to the customer count each time 
// the "customer-bttn" button is clicked
function addCustomer() {
    count += 1
    currentCount.textContent = count
}

// saveCount function renders the "current-count" to the "previous-customers" 
// paragraph while resetting the "current-count" to 0 when clicked
function saveCount() {
    let previousEntries = count + " - "
    save.textContent += previousEntries
    currentCount.textContent = 0
    count = 0
}