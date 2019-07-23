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

axios.get('https://lambda-times-backend.herokuapp.com/articles').then((axiosArticleData)=>{
        console.log('article data here',axiosArticleData.data);
        let cards=axiosArticleData.data.article;
        cards.forEach(articleName =>{
        makeArticleCard(articleName);
    });

function makeArticleCard(article){
    let aCard=document.querySelector('.cards-container');
    let cardDiv=document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerText=article;

    console.log('cardDIV here', cardDiv);

    let aHeadline=document.querySelector('.cards-container');
    let headlineDIV=document.createElement('div');
    headlineDIV.classList.add('headline');
    headlineDIV.innerText=article;

    console.log('headline here', headlineDIV);

    let Author=document.querySelector('.cards-container');
    let authorDIV=document.createElement('div');
    authorDIV.classList.add('author');
    authorDIV.innerText=article;

    console.log('Author here', authorDIV);

    let imgContainer=document.querySelector('.cards-container');
    let imgContA=document.createElement('div');
    imgContA.classList.add('img-container');
    imgContA.innerText=article;

    console.log('img container here', imgContA);

    let imgSrc=document.querySelector('.cards-container');
    let imgSrcA=document.createElement('img');
    imgSrcA.src.add(url);
    imgSrcA.innerText=article;

    console.log('img and src here', imgSrcA);

    let aSpan=document.querySelector('.cards-container');
    let spanElement=document.createElement('span');
    spanElement.textContent='By `${Author}';
    spanElement.innerText=article;

    console.log('Span element here', spanElement);
    
    card.appendChild(headlineDIV);
    card.appendChild(authorDIV);
    Author.appendChild(imgContA);
    Author.appendChild(spanElement);

}