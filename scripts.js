const buttons = document.querySelectorAll('.button')
//console.log(buttons)
const body = document.querySelector('body')

buttons.forEach((button) => {
    //console.log(button)
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
       if(e.target.id === 'yellow'){
        body.style.backgroundColor = "yellow" ;
       }
        if(e.target.id === 'green'){
        body.style.backgroundColor = "green" ;
        }
        if(e.target.id === 'red'){
        body.style.backgroundColor = "red" ;
        }
        if(e.target.id === 'pink'){
        body.style.backgroundColor = "pink" ;
        }
    });
    });