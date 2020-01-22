const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button')
button.textContent='Clear'
button.addEventListener('click',clearCanvas);
body.prepend(button);
createCanvas();

function changeDivColor() {
    const randomR = Math.random()*255;
    const randomG = Math.random()*255;
    const randomB = Math.random()*255;
    var currColor = this.style.backgroundColor;
    if(currColor !== ""){
        var start = currColor.indexOf('(');
        var firstComma = currColor.indexOf(",");
        var lastComma = currColor.lastIndexOf(",")
        var end = currColor.indexOf(')')
        var newR = parseInt(currColor.substring(start+1,firstComma))-(255*.1);
        var newG = parseInt(currColor.substring(firstComma+1,lastComma))-(255*.1);
        var newB = parseInt(currColor.substring(lastComma+1,end))-(255*.1);
        this.style.backgroundColor = `rgb(${newR},${newG},${newB})`;
    } else {
        this.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
}
function createCanvas(x=16) {
    //Create divs and append to container
    var dimension = x*x;
    var maxWidth = 340;
    for (var i = 0; i < dimension; i++) {
        var currDiv = document.createElement('div');
        currDiv.style.width = `${maxWidth/x}px`;
        currDiv.style.height = `${maxWidth/x}px`;
        currDiv.style.border = "1px black solid";
        currDiv.style.float = 'left';
        currDiv.addEventListener('mouseover', changeDivColor);
        container.appendChild(currDiv);
        if(i%x===0){
            currDiv.style.clear = 'left';
        }
    }
}
function clearCanvas(){
    const divs = container.querySelectorAll('div');
    divs.forEach((div)=>{
        container.removeChild(div);
    })
    var x = window.prompt("Enter how many squares per side the new canvas will be.");
    createCanvas(x);
}
