<!-- This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" -->

<?php 
function accum($s) {
  $arr = str_split($s);
  $ans = [];
  
  foreach ($arr as $key => $i) {
    $valA = strtoupper($i);
    $valB = strtolower($i);
    
    if ($key == 0) {
      array_push($ans, $valA);
    } else {
      $z = $valA;
        for ($a=0; $a < $key; $a++) {
          $z .= $valB;
        }
      array_push($ans, $z);
    }
   }
  
  return implode('-', $ans);
}
?>