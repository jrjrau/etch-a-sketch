const sketchpad = document.querySelector("#sketchpad");
const gridSize = document.querySelector("#gridSize");
let input = 16
let selectedColor = '#000000';
let colorI = 0;
let rainbowstatus = false;
let opacityMode = false;
buildGrid();

function buildGrid(){
    for (let i = 0; i < input**2; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item")
        div.style.flexBasis = `calc(100%/${input})`;
        if (opacityMode === false){
        div.style.opacity = 1
        } else {
            div.style.opacity = 0
        }
        //div.style.border = '1px solid black'
        //div.textContent=i
        gridSize.textContent = `Current grid size: ${input} x ${input}`;
        sketchpad.appendChild(div);

        div.addEventListener("mouseover", function (e) {
            if (opacityMode === true){
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
            }
            if (rainbowstatus === true){
                switch(colorI){
                    case 0:
                        selectedColor = "red"
                        break;
                    case 1:
                        selectedColor = "Orange"
                        break;
                    case 2:
                        selectedColor = "yellow"
                        break;
                    case 3:
                        selectedColor = "green"
                        break;
                    case 4:
                        selectedColor = "blue"
                        break;
                    case 5:
                        selectedColor = 'indigo'
                        break;
                    case 6:
                        selectedColor = 'violet'
                }
                colorI = (colorI + 1) % 7;
            }
            e.target.style.background = selectedColor


        })
    }}

const sizePrompt = document.querySelector("#sizePrompt");
const erase = document.querySelector("#erase");
const colorPrompt = document.querySelector("#colorPrompt");
const colorMenu = document.querySelector("#colorMenu")
const colorPicker = document.querySelector("#colorPicker");
const rainbowPrompt = document.querySelector('#rainbow')
const opacity = document.querySelector('#opacity')

sizePrompt.addEventListener("click", () => {
    input = prompt("Enter grid size (max 250) ");
    if (input !== null && input !== "" && input >0 && input <=250){
        sketchpad.innerHTML = '';
        buildGrid(input)
    } else {
        alert("Invalid Grid Size")
    }

  });

erase.addEventListener("click", () => {
    sketchpad.innerHTML = '';
    buildGrid(input)
});

opacity.addEventListener("click", () => {
    opacityMode = !opacityMode
    opacity.classList.toggle('on')
    sketchpad.innerHTML= '';
    buildGrid()

});

rainbowPrompt.addEventListener("click", () => {
    if (rainbowstatus === false){
    rainbowstatus = true
    //colorPicker.classList.add("rainbow")
    rainbowPrompt.classList.add("on")}
    else {
        rainbowstatus = false;
        rainbowPrompt.classList.remove("on")
        selectedColor = 'black'
    }
});


colorPrompt.addEventListener("mouseover", () => {
     colorMenu.style.display = "block";
});

colorPrompt.addEventListener("mouseout", () => {
    colorMenu.style.display = "none";
});

colorMenu.addEventListener("mouseover", () => {
    colorMenu.style.display = "block";
});

colorMenu.addEventListener("mouseout", () => {
    colorMenu.style.display = "none";
});

colorMenu.addEventListener("input", (event) => {
    selectedColor = event.target.value;
    rainbowstatus = false
    rainbowPrompt.classList.remove("on")

})