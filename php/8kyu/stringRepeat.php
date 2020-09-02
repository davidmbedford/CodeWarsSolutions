<!-- Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" -->

<?php 
function repeatStr($n, $str) {
  $c = 0;
  $s = '';
  while ($c < $n) {
    $s .= $str;
    $c++;
  };
  return $s;
}

?>