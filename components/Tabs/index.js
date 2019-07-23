// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then((axiosData)=>{
    // console.log('console log here',axiosData.data);
    let tabs=axiosData.data.topics;
    tabs.forEach(topicName =>{
        topicData(topicName);
    });
    


});


    
function topicData(topic){
   let tabTopic= document.querySelector('.topics');
   let divElement=document.createElement('div');
   divElement.classList.add('tab');
   divElement.innerText=topic;
   tabTopic.appendChild(divElement);

}



