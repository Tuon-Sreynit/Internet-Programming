const loadingText=document.getElementById("loading-text");
const nameInput=document.getElementById("inputName");
const Name = document.getElementById("name");
const gender = document.getElementById("gender");
const percent = document.getElementById("percent");
nameInput.innerHTML="";
loadingText.hidden=false;
function getDataofNameInput(){
    nameInput.innerHTML="";
    Name.innerHTML="";
    gender.innerHTML="";
    percent.innerHTML="";
    fetch(`https://api.genderize.io/?name=${nameInput.value}`)
    .then(async(res)=>{
        const data = await res.json();
        Name.innerHTML=data['name'];
        gender.innerHTML=data['gender'];
        percent.innerHTML=(data['probability'] * 100 ).toFixed(2)+"%";  
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        loadingText.hidden=true;
    })   
}