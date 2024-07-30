const Facile = document.getElementById('Facile');

//FACILE

Facile.addEventListener('click', function (){
    const container = document.getElementById('container');
    
    for (let i = 1; i <= 100, i++){

        const newcell = document.createElement('div');
        newcell.innerHTML = i;
        container.append(newcell);
    }
        
})