//Write a function to reverse a string e.g Hello => olleH

function reverseString(str) {
    return str.split('').reverse().join('');
  }

  console.log(reverseString("Hello"));