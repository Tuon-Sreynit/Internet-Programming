let listWrapperEle = document.querySelector(".container");
let addBtnEle = document.getElementById("add-btn");

let taskArr = [
    { name: "Create Project", assignee: "Tola", date: "24/2/2022" },
    { name: "Define Project requirement", assignee: "Makara", date: "2/3/2022" },
    { name: "Deploy Project", assignee: "Kompheak", date: "2/8/2022" },
    { name: "Deploy Project", assignee: "Minea", date: "2/9/2022" },
    { name: "Hosting", assignee: "Mesa", date: "2/12/2022" },
];

const addData=()=>{
    taskArr.push(
        { name: "Create Project", assignee: "Tola", date: "24/2/2022" }
    )
    

    localStorage.setItem("renderList",JSON.stringify("renderList"))
    renderList();
    addData();
}
function renderList() {
        
    let listContent = "";
    document.querySelectorAll('.row').forEach(item=>{
        item.remove()
    })
    taskArr.forEach(taskArr => {
        listContent += `
        <div class="row">
        <div class="col">${taskArr.name}</div>
        <div class="col">${taskArr.assignee}</div>
        <div class="col">${taskArr.date}</div>
        <div class="col del"><svg class="del" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path  class="del" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" fill="#0D0D0D"/></svg></div>
        </div>
        `;
    });
        
    listWrapperEle.innerHTML += listContent;
    Delete()
}
window.addEventListener('load',()=>{Delete()})
    const Delete=()=>{
        document.querySelectorAll('.row').forEach((item)=>{
            // console.log(item)
            item.addEventListener('click',(e)=>{
                const target=e.target;
                console.log(target)
                if(target.classList.contains('del')){
                    item.remove()
                }
            })
        })
    } 
    renderList();