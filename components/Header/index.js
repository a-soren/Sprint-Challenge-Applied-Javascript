// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header=document.querySelector('.header-container');

//   creating elements
    const headerDIV=header.createElement('div').classList.add('header');

    const headerSpan=header.createElement('span').classList.add('date').textContent('SMARCH 28, 2019');

    const headerH1=header.createElement('h1').textContent('Lambda Times');

    const headerSpan2=header.createElement('span').classList.add('temp').textContent('98°');

// appending elements

    header.appendChild(headerDIV);
    header.appendChild(headerSpan);
    header.appendChild(headerH1);
    header.appendChild(headerSpan2);


    
    return header;
}

const mainHeader=document.querySelector('.header-container');
mainHeader.appendChild(Header());