import './less/index.less'

// Your code goes here!

// load 

 window.onload = function(event){
     console.log(`READY!`)
     const heading = document.querySelector('h1'); 
     heading.textContent = 'Welcome my Guests!'
//keydown
     window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = '<h1>You ran ORDER 6</h1>'  
        }
    })
 }

//  copy
const headingSample = document.querySelector('h1')

window.addEventListener('copy', ()=>
navigator.clipboard.readText().then(text =>{
    headingSample.textContent += text
    
}))
 
// click 

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

// double click

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
} )

//mouse move

document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY } = evt 
    console.log(`mouse is at ${clientX} and ${clientY}`)
})

//mouseenter and mouseleave

const destinations = document.querySelectorAll('.destination'); 
    for(let destination of destinations){
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt =>{
            destination.style.fontWeight = 'initial'
        })
    }
//wheel

let scale = 1;
      const zoomStyle = document.querySelector('h1');
      document.onwheel = zoom;

    function zoom(event) {
        event.preventDefault();
        if (event.deltaY < 0) {
          scale *= event.deltaY * -2;
        }
        else {
          scale /= event.deltaY * 2;
        }
        scale = Math.min(Math.max(.125, scale), 4);
        zoomStyle.style.transform = `scale(${scale})`;
      }
      
    let button = document.querySelectorAll('.btn'); 
      for(let btn of button){
        btn.addEventListener('click', (event) => {
            alert('You Clicked the Button!')
          })
      }
