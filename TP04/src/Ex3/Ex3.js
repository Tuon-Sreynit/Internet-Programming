//set initial count
let count=window.localStorage.getItem("count")!=null ?window.localStorage.getItem("count"):0 ;

//set value and buttons
const value=document.querySelector("#value");
const buttons=document.querySelectorAll(".btn");
value.textContent=count;
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count=0;
            
        }
        save()
        value.textContent=count;
    })
});
const save=()=>{
    window.localStorage.setItem("count",count)
}