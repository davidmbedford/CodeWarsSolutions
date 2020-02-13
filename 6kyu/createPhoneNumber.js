// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    let arr = numbers.join("");
    let part1 = "(" + arr.slice(0, 3) + ")";
    let part2 = " " + arr.slice(3, 6) + "-";  
    let part3 = arr.slice(6, 10);
    let phoneNumber = part1 + part2 + part3;
    return phoneNumber;
  }

//   alt

function createPhoneNumber(numbers){
    let arr = numbers.join("");
    let phoneNumber = "(" + arr.slice(0, 3) + ") " + arr.slice(3, 6) + "-" + arr.slice(6, 10);
    return phoneNumber;
  }

  
//   interesting find from other community solutions

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }