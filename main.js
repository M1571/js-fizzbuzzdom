var numbering = 100;

for (let i = 0; i < numbering; i++) {
    var num = i + 1;

    // Multipli 3 e 5 FizzBuzz
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('fizzbuzz')
    }
    // Multipli 3 Fizz  
    else if (num % 3 == 0) {
        console.log('fizz')
    }
    // Multipli 5 Buzz
    else if (num % 5 == 0) {
        console.log('buzz')
    }
    else {
        console.log(num);
    }
}

// Devo collegare tutto a CSS