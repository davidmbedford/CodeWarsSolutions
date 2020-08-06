// Simple Encryption #1 - Alternating Split

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// Sample Tests
// describe("Solution", function(){
//   it("EncryptExampleTests", function(){    
//     Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
//     Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
//     Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
//     Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
//   });
// });

// describe("Solution", function(){
//   it("DecryptExampleTests", function(){    
//     Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
//     Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
//     Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
//   });
// });

// describe("Solution", function(){
//   it("Null or Empty", function(){    
//     Test.assertEquals(encrypt("", 0), "");
//     Test.assertEquals(decrypt("", 0), "");
//     Test.assertEquals(encrypt(null, 0), null);
//     Test.assertEquals(decrypt(null, 0), null);
//   });
// });

const encrypt = (text, n) => {
  let a = "";
  let b = "";
  let arr = text;
  if (n <= 0 || text === null) {
    return arr
  } else {
    for (let i = 0; i < arr.length; i++) {
      if ((i-1) % 2 == 0) {
        a += arr[i]
      } else {
        b += arr[i]
        }
      }  
    arr = a + b;
    return encrypt(arr, n-1)
  }
}

const decrypt = (encryptedText, n) => {
  let arr = encryptedText;
  if (n <= 0 || encryptedText === null) {
    return arr
  } else {
    let mid = Math.floor(encryptedText.length / 2);
    let secondHalf = encryptedText.slice(0, mid);
    let firstHalf = encryptedText.slice(mid);
    arr = "";
    for (i = 0; i < firstHalf.length; i++) {
      if (secondHalf[i] === undefined) {
        arr += firstHalf[i];
      } else {
        arr += firstHalf[i] + secondHalf[i]
        }
      }
    }
  return decrypt(arr, n - 1);
}