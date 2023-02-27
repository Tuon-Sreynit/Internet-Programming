const selection = document.querySelector('.container');
const listUniversity = document.querySelector('#list-university');

function display(){
  listUniversity.innerHTML="";
  document.querySelector('.found_univ').style.display="flex"
  fetch(`http://universities.hipolabs.com/search?country=${select.value}`).then((res)=>res.json()).then(data=>{
 
    let univer ="";
    if(data.length>0){
      document.querySelector('.univ_notfound').style.display="none"
      data.forEach(item=>{
        univer+= `
        <div class=" w-[30%] justify-center mx-auto  gap-[2rem] my-5 bg-slate-300 text-center p-[2rem] rounded-xl">
            <h1 class="font-bold text-[1.5rem]">${item.name}</h1>
            <p>(${item.country}-${ item.alpha_two_code})</p><br>
            <div class="link">
            <a class=" text-blue-600" href="${item.web_pages}">
            <div>
            <i class="fa fa-globe" aria-hidden="true"></i>
            ${item.domains[0]}</a></div>
            </div>
        </div>
      `
      })
    }else document.querySelector('.univ_notfound').style.display="block";
    document.querySelector('.found_univ').style.display="none"

    listUniversity.innerHTML = univer;
  })
}

window.onload=display()



