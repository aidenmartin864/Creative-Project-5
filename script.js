const buttons = document.getElementsByClassName('changeStatus')
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
        if(buttons[i].textContent === 'I own this'){
            buttons[i].textContent = 'I don\'t own this (yet)';
        }
        else {
            buttons[i].textContent = 'I own this';
        }
    });
}