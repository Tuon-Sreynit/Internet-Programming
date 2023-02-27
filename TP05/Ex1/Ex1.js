const type = document.getElementById("type");
const participants = document.getElementById("participants");
const price = document.getElementById("price");
const link = document.getElementById("link");
const loadingText = document.getElementById("loading-text");
const nameActivity = document.getElementById("activity-name");
nameActivity.innerHTML="";
function getMeAnActivity() {
    nameActivity.innerHTML="";
    type.innerHTML="";
    participants.innerHTML="";
    price.innerHTML="";
    link.innerHTML="";
    loadingText.hidden=false;
    fetch("https://www.boredapi.com/api/activity")  
    .then(async(res) => {
        const data = await res.json();
        nameActivity.innerHTML=data['activity'];
        type.innerHTML= data['type'];
        participants.innerHTML= data['participants'];
        price.innerHTML= data['price'];
        link.innerHTML= data['link'];
    })
    .catch((err) => {
        console.log(err);
    }).finally(() => {
        loadingText.hidden=true;
    })
}