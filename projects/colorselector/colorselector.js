const body = document.getElementsByTagName("body")[0]
const randomBtn = document.getElementById("random")


function setColor(color){
    body.style.backgroundColor = color;
}


function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const rcolor = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = rcolor;
} 

randomBtn.addEventListener("click", (e) => {
    randomColor()
})
    