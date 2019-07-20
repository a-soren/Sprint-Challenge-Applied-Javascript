// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function makeArticleCard(){

    // create elements
    const card=document.createElement('div');
    card.classList.add('card');

    const headline=document.createElement('div');
    headline.classList.add('headline');
    headline.textContent=articleHeadline;

    const author=document.createElement('div');
    author.classList.add('author');

    const imgContainer=document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.createElement('img',src=imgURL);
    
    const articleSpan=document.createElement('span');
    articleSpan.textContent='By ',authorsName;


    // appending elements

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(articleSpan);

}

