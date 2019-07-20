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
    console.log(axiosData.data);
});

class newTabs{
    constructor(topicName){
        const topics=querySelector('.topics');
            topicName.forEach((topicData)=>{
            topics.appendChild(this.tab(topicData))
        });

    const tab=document.createElement('div');
        tab.classList.add('tab');
        tab.textContent=topicName;

    const topicTab=document.querySelector('.topics');
    
    topicTab.appendChild(newTabs());
    return newTabs;  
    }
    
    
}




