let name = 'Joshua';

const myName = document.getElementById('myName');

console.log(myName)

myName.innerText = name;


const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');


const count = document.getElementById('count')
let theCount = 0;

count.innerText = theCount;

const changeColor =()=>{

    if (theCount % 2 == 0) {
        count.classList.add('even')
        count.classList.remove('odd')
    } else if( theCount % 2 == 1 || theCount % 2 == -1) {
        count.classList.add('odd')
        count.classList.remove('even')
    }
}

const blockDiv = document.querySelector('.block-div')

const buildBlocks =()=> {
    let block = document.createElement('div')
    block.classList.add('block')
    blockDiv.appendChild(block);
}


const removeBlock =()=> {
    blockDiv.removeChild(block)
}

addButton.addEventListener('click', ()=> {
    // console.log('clicked')
    theCount++;
    changeColor()
    buildBlocks()
    count.innerText = theCount
})

subButton.addEventListener('click', ()=> {
    theCount--;
    changeColor()
    removerBlock()
    count.innerText = theCount
})