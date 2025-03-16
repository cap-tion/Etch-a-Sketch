const cont = document.querySelector(".container");
const sizeButton = document.querySelector(".size");
const clear = document.querySelector(".clear");
const rainbow=document.querySelector(".rainbow");
const pick = document.querySelector("#fav");
createDivs(16);
var setSize;
var selectedColor = "#000000";
var rainbowMode=false;

function resetGrid(){
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
}
function createDivs(a){
    resetGrid();
    var dim=500/a;
    
    for (var i=0;i<a;i++){
        for (var j=0;j<a;j++){
            const grid = document.createElement("div");
            grid.classList.add("gridElement")
            
            grid.style.width = `${dim}px`; 
            grid.style.height = `${dim}px`;
            cont.appendChild(grid);
        }
    }

    const gridElements=document.querySelectorAll(".gridElement");
    gridElements.forEach((gridElement)=>{
        gridElement.addEventListener('mouseenter',()=>{  
            if (rainbowMode) {
                gridElement.style.backgroundColor = getRandomColor();
            } else {
                gridElement.style.backgroundColor = selectedColor;
            }
        })
    });
}
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
sizeButton.addEventListener('click',()=>{
    setSize = Math.floor(prompt("Enter new Size(between 2 and 100)"));
    if (setSize>=2 && setSize<=100){
        createDivs(setSize);
    }
    else{
        alert("invalid number")
    }
});
clear.addEventListener('click',()=>{
    const gridElements = document.querySelectorAll(".gridElement"); 
    gridElements.forEach((gridElement) => {
        gridElement.style.backgroundColor = ""; 
    });
})
rainbow.addEventListener('click',()=>{
    rainbowMode=!rainbowMode;
})
pick.addEventListener('change',(e)=>{
    selectedColor=e.target.value;

})
