
const url = 'https://jsonplaceholder.typicode.com/photos';

const getData=()=>{
    fetch(url).then(res=>res.json()).then(data=>{
        render(data)
    })
}
const render = (data)=>{
    let tmp = "";
    data.forEach(item => {
        tmp += `
            <div class="box">
                <div>
                    <img src="${item.thumbnailUrl}" alt="${item.albumId}-${item.title}">
                </div>
                <div>
                    <p>${item.title}</p>
                    <p>Album Id ${item.albumId}</p>
                    <p>Category: ${item.id}</p>
                    <p class="text-blue-800">
                        <a href="homepage.html?id=${item.id}">homepage</a>
                    </p>
                </div>
            </div>
        `
    })
    document.querySelector('.output-data').innerHTML = tmp
}
window.addEventListener('load',getData());
//add data from input form
let name1 = document.querySelector('#name')
let category = document.querySelector('#category')
let add = document.querySelector('#add')
add.addEventListener("click",()=>{
    
    let tmp =`
        <div class="box">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <p>${name1.value}</p>
                <p>Album Id </p>
                <p>Category: ${category.value}</p>
                <p>
                    <a href="homepage.html?id=">homepage</a>
                </p>
            </div>
        </div>
    `
    document.querySelector('.output-data').innerHTML = tmp
})




