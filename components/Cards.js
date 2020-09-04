// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

// Get Request
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const topicArr = ['javascript', 'bootstrap', 'technology', 'jquery', 'node']
        for (let i = 0; i < topicArr.length; i++) {
            let topic = response.data.articles[topicArr[i]]
            topic.forEach(element => {
                const newArticle = makeArticle(element)
                newArticle.classList.add(topicArr[i])
                console.log(newArticle)
                articleContainer.appendChild(newArticle)
            })
        }
    })
    .catch(error => {
        console.log(error)
    })

// Article Constructor Function
function makeArticle(arr) {
    const { headline, authorPhoto, authorName} = arr
    // Create Elements
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('span')

    // Structure Elements
    card.appendChild(cardHeadline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(image)

    // Class Names
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    // Text Content
    cardHeadline.textContent = headline
    image.setAttribute('src', authorPhoto)
    name.textContent = `By ${authorName}`

    // Add Event Listener
    card.addEventListener('click', () => {
        console.log(headline)
    })

    // Output Article
    return card
}

// Select Article Container
const articleContainer = document.querySelector('div.cards-container')

