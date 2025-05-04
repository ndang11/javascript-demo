// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100 + 1);

let guess;

while (guess !== secretNumber) {
  guess = Number(prompt("Guess a number between 1 and 100:"));

  if (guess > secretNumber) {
    alert("Too high! Try again 🤦‍♂️🤦‍♂️.");
  } else if (guess < secretNumber) {
    alert("Too low! Try again 🙆🙆.");
  } else {
    alert("🎉 Correct! You guessed the number!");
  }
}

//print prime numbers from 1 -100

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//multiples of 3 and 5 

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//the sum of numbers from 0 - n, n being the number entered 10 ->
let n = Number(prompt("Enter a number:"));
let sum = 0;

for (let i = 0; i <= n; i++) {
  sum += i;
}

alert("The sum from 0 to " + n + " is: " + sum);


// enter a number to print a staircase 

let levels = Number(prompt("Enter the number of levels:"));

for (let i = 1; i <= levels; i++) {
  let step = "";
  for (let j = 1; j <= i; j++) {
    step += "#";
  }
  console.log(step);
}



let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
  alert(number + " is even.");
} else {
  alert(number + " is odd.");
}

