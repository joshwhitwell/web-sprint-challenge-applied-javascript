// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// Get Axios Data
axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(element => {
            const newTab = Tab(element)
            topicsContainer.appendChild(newTab)
        })
    })
    .catch(error => {
        console.log(error)
    })

// Tab Constructor Function
function Tab(string) {
    //Create Element
    const tab = document.createElement('div')

    //Add Class Name
    tab.classList.add('tab')
    tab.classList.add(string)

    // Add Content
    tab.textContent = string

    // Click Listener
    tab.addEventListener('click', (event) => {
        const allCards = Array.from(document.querySelectorAll('.card'))
        const javaCards = Array.from(document.querySelectorAll('.card .javascript'))
        allCards.forEach(element => {
            if (event.target.className === element.className) {
                element.style.display = ''
            }
            if (event.target.className != element.className) {
                element.style.dispaly = 'none'
            }
        })
    })

    // Output Tab
    return tab
}

// Select Topics Container
const topicsContainer = document.querySelector('div.topics')
const allTab = document.createElement('div')
allTab.classList.add('tab')
allTab.textContent = 'All'
topicsContainer.appendChild(allTab)
console.log(allTab)