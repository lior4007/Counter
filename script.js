let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = localStorage.getItem('Count');

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter(){
    count++;
    localStorage.setItem('Count', count);
    counter.innerHTML = 'עוד ' + localStorage.getItem('Count') + ' ימים';

    if(counter.innerHTML>'0'){
        counter.style.color = 'green'
    }else if(counter.innerHTML === '0'){
        counter.style.color = 'black';
    }
}

function decrementCounter(){
    count--;
    localStorage.setItem('Count', count);
    counter.innerHTML = 'עוד ' + localStorage.getItem('Count') + ' ימים';
    if(counter.innerHTML<'0'){
        counter.style.color = 'red';
    }else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
}