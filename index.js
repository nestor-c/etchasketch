const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button')
button.textContent='Clear'
button.addEventListener('click',clearCanvas);
body.prepend(button);
createCanvas();

function changeDivColor() {
    this.style.backgroundColor = 'black'
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
