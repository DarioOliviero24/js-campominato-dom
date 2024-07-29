const Facile = document.getElementById('Facile');
const Medio = document.getElementById('Medio');
const Difficile = document.getElementById('Difficile');

//FACILE

Facile.addEventListener('click', function (){
    console.log('Clicco sul bottone Facile');
    for( let i = 0; i <= 100, i++){
        console.log(i);

        const newcell = document.createElement('div');
        newcell.innerHTML - i;
        newcell.append(Facile);
    }
        
})

//MEDIO


Medio.addEventListener('click', function (){
    console.log('Clicco sul bottone Medio');
    for( let j = 0; j <= 81, j++){
        console.log(j);

        const newcell = document.createElement('div');
        newcell.innerHTML - j;
        newcell.append(Medio);
    }
        
})
//DIFFICILE


Difficile.addEventListener('click', function (){
    console.log('Clicco sul bottone Difficile');
    for( let k = 0; k <= 100, k++){
        console.log(k);

        const newcell = document.createElement('div');
        newcell.innerHTML - k;
        newcell.append(Difficile);
    }
        
})