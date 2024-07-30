//FACILE
const Facile = document.getElementById('Facile');

Facile.addEventListener('click', function (){
    const container = document.getElementById('container');
    
    for (let i = 1; i <= 100; i++){

        const newcell = document.createElement('div');
        newcell.innerHTML = i;
        newcell.addEventListener('click', function(){
        newcell.classList.add('dario')    
        });
        container.append(newcell);    
    }
    
});


//Medio
const Medio = document.getElementById('Medio');

Medio.addEventListener('click', function (){
    const container = document.getElementById('container');
    
    for (let i = 1; i <= 81; i++){

        const newcell = document.createElement('div');
        newcell.innerHTML = i;
        newcell.addEventListener('click', function(){
        newcell.classList.add('dario')    
        });
        container.append(newcell);
        
    }
    
});


//Difficile
const Difficile = document.getElementById('Difficile');

Difficile.addEventListener('click', function (){
    const container = document.getElementById('container');
    
    for (let i = 1; i <= 49; i++){

        const newcell = document.createElement('div');
        newcell.innerHTML = i;
        newcell.addEventListener('click', function(){
        newcell.classList.add('dario')    
        });
        container.append(newcell);
    } 
});