let input = prompt("Enter a number:");

  if (input % 11 === 0) {
    console.log(input+"is divisible by 11: ");
  }else {
    console.log(`${input} is not divisible by 11`);
  }