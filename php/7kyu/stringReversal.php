<!-- In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck! -->

<?php
function solve(string $s): string {
  // set values of space locations
  $arr = str_split($s);
  $spaces = array();
  foreach($arr as $key => $i) {
    if ($i == " ") {
      array_push($spaces, $key);
    }
  };
  // remove spaces > reverse string > convert to array
  $ans = str_Split(strrev(str_replace(' ', '', $s))); 
  // re-insert spaces > convert back to string
  foreach($spaces as $i) {
    array_splice($ans, $i, 0, ' ');
  }; 
  return implode('', $ans);
}

?>