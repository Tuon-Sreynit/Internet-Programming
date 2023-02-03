const history=document.querySelector(".history")
const vision=document.querySelector(".vision")
const goal=document.querySelector(".goals")
const content=document.querySelector(".text_wrapper")

const moveToHistory=()=>{
    content.style.cssText="--transform-x-percen:0%;"
    clearActive()
    history.classList.add("active")
}
const moveToVision=()=>{
    content.style.cssText="--transform-x-percen:-100%;"
    clearActive()
    vision.classList.add("active")
}
const moveToGoal=()=>{
    content.style.cssText="--transform-x-percen:-200%;"
    clearActive()
    goal.classList.add("active")
}
history.addEventListener("click",moveToHistory)
vision.addEventListener("click",moveToVision)
goal.addEventListener("click",moveToGoal)
const clearActive=()=>{
    if(history.classList.contains("active")){
        history.classList.remove("active")
    }
    if(vision.classList.contains("active")){
        vision.classList.remove("active")
    }
    if(goal.classList.contains("active")){
        goal.classList.remove("active")
    }
}