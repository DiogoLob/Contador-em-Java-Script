var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0){
        currentNumberWrapper.style.color = 'chartreuse';
    } else{
        currentNumberWrapper.style.color = 'white';
    }
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    } else{
        currentNumberWrapper.style.color = 'white';
    }
}