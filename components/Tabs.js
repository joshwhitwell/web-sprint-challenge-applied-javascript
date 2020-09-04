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
        const dataArr = response.data.topics
        dataArr.unshift('all')
        dataArr.forEach(element => {
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
        const javaCards = Array.from(document.querySelectorAll('.card.javascript'))
        const bootCards = Array.from(document.querySelectorAll('.card.bootstrap'))
        const techCards = Array.from(document.querySelectorAll('.card.technology'))
        const queryCards = Array.from(document.querySelectorAll('.card.jquery'))
        const nodeCards = Array.from(document.querySelectorAll('.card.node'))

        if (event.target.className.includes('all')) {
            techCards.forEach(element => {
                element.style.display = ''
            })
            javaCards.forEach(element => {
                element.style.display = ''
            })
            bootCards.forEach(element => {
                element.style.display = ''
            })
            queryCards.forEach(element => {
                element.style.display = ''
            })
            nodeCards.forEach(element => {
                element.style.display = ''
            })
        } else if (event.target.className.includes('technology')) {
            techCards.forEach(element => {
                element.style.display = ''
            })
            javaCards.forEach(element => {
                element.style.display = 'none'
            })
            bootCards.forEach(element => {
                element.style.display = 'none'
            })
            queryCards.forEach(element => {
                element.style.display = 'none'
            })
            nodeCards.forEach(element => {
                element.style.display = 'none'
            })
        } else if (event.target.className.includes('javascript')) {
            javaCards.forEach(element => {
                element.style.display = ''
            })
            techCards.forEach(element => {
                element.style.display = 'none'
            })
            bootCards.forEach(element => {
                element.style.display = 'none'
            })
            queryCards.forEach(element => {
                element.style.display = 'none'
            })
            nodeCards.forEach(element => {
                element.style.display = 'none'
            })
        } else if (event.target.className.includes('bootstrap')) {
            bootCards.forEach(element => {
                element.style.display = ''
            })
            techCards.forEach(element => {
                element.style.display = 'none'
            })
            javaCards.forEach(element => {
                element.style.display = 'none'
            })
            queryCards.forEach(element => {
                element.style.display = 'none'
            })
            nodeCards.forEach(element => {
                element.style.display = 'none'
            })
        } else if (event.target.className.includes('jquery')) {
            queryCards.forEach(element => {
                element.style.display = ''
            })
            techCards.forEach(element => {
                element.style.display = 'none'
            })
            javaCards.forEach(element => {
                element.style.display = 'none'
            })
            bootCards.forEach(element => {
                element.style.display = 'none'
            })
            nodeCards.forEach(element => {
                element.style.display = 'none'
            })
        } else if (event.target.className.includes('node')) {
            nodeCards.forEach(element => {
                element.style.display = ''
            })
            techCards.forEach(element => {
                element.style.display = 'none'
            })
            javaCards.forEach(element => {
                element.style.display = 'none'
            })
            bootCards.forEach(element => {
                element.style.display = 'none'
            })
            queryCards.forEach(element => {
                element.style.display = 'none'
            })
        } 

    })
        
    // Output Tab
    return tab
}



// Select Topics Container
const topicsContainer = document.querySelector('div.topics')

