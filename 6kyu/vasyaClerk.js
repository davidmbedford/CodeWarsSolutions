// Vasya - Clerk 

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

// Sample Tests
// Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");


const tickets = (peopleInLine) => {
  let arr = peopleInLine
  let c25 = 0
  let c50 = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 25) {
      c25 = c25 + 1
    } else if (arr[i] == 50 && c25 >= 1) {
      c50 = c50 + 1
      c25 = c25 - 1
    } else if (arr[i] == 100 && (c25 >= 1 && c50 >= 1)) {
      c50 = c50 - 1 
      c25 = c25 - 1
    } else if (arr[i]== 100 && c25 >= 3) {
      c25 = c25 - 3
    } else {
      return "NO"
    }
  }
  return "YES"
}