const loadingText=document.getElementById("loading-text");
const nameInput=document.getElementById("inputName");
const countryList = document.getElementById("countryList");

nameInput.innerHTML="";
loadingText.hidden=false;
function getDataofNameInput(){
    nameInput.innerHTML="";
    countryList.innerHTML = "";
    fetch(`https://api.nationalize.io/?name=${nameInput.value}`)
    .then(async(res)=>{
        const data = await res.json();
        for (let i=0; i<data.country.length; i++) {
            countryList.innerHTML += `
            <div class="flex w-[35rem] p-[1rem] m-[1rem] gap-[20rem] bg-slate-200 rounded-lg">
                <div class="text-orange-500 text-[2rem] text-center">${data.country[i].country_id}</div>
                <div class="text-blue-700 text-[2rem] ">${(data.country[i].probability*100 ).toFixed(2)}% </div>
            </div>
            `
        }
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        loadingText.hidden=true;
    })   
}