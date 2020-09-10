<!-- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. -->

<?php
function fake_bin(string $s): string {
  $arr = str_split($s);
  $ans = [];
  foreach ($arr as $key => $z) { 
    array_push($ans, (($z<5)?0:1)); 
  }
  return implode($ans, '');
}
?>