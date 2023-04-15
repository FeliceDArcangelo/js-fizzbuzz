const square = document.querySelector('.container')
for(let i = 1; i <= 1000; i++){
    if (i % 15 == 0){
        square.innerHTML = square.innerHTML + `<div class="card card-red">FizzBuzz</div>`
    }
    else if (i % 5 == 0){
        square.innerHTML = square.innerHTML + `<div class="card card-yellow">Buzz</div>`
    }
    else if (i % 3 == 0){
        square.innerHTML = square.innerHTML + `<div class="card card-green">Fizz</div>`
    }
    else {
        square.innerHTML = square.innerHTML + `<div class="card card-blue">${i}</div>`
    }
}

