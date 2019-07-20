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
    
//   creating elements
    const headerDIV=document.createElement('div');
    headerDIV.classList.add('header');

    const headerSpan=document.createElement('span');
    headerSpan.classList.add('date');
    headerSpan.textContent='SMARCH 28, 2019';

    const headerH1=document.createElement('h1');
    headerH1.textContent='Lambda Times';

    const headerSpan2=document.createElement('span');
    headerSpan2.classList.add('temp');
    headerSpan2.textContent='98°';

// appending elements

    headerDIV.appendChild(headerSpan);
    headerDIV.appendChild(headerH1);
    headerDIV.appendChild(headerSpan2);

    return headerDIV;
}

const mainHeader=document.querySelector('.header-container');
mainHeader.appendChild(Header());