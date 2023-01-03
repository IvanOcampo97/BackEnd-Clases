function getRandomArbitrary(min, max) {
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor)
}

const numbers = {}
for(let i = 0; i < 10; i++){
    const valor = getRandomArbitrary(1, 20)
    console.log(Math.floor(valor))

    if (numbers[valor]) {
        numbers[valor]++;
    } else {
        numbers[valor] = 1;
    }
}

console.log(numbers)
