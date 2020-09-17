<?php

function skiponacci($n) {
  $fib = [];
  for ($i=0; $i < $n; $i++) {
    if ($i==0) {
      array_push($fib, 1);
    } else if ($i==1) {
      array_push($fib, 1);
    } else {
      $x = $fib[$i-1] + $fib[$i-2];
      array_push($fib, $x);
    }
  }
  
  $ans = [];
  for ($i=0; $i < $n; $i++) {
    if ($i==0) {
      array_push($ans, ($fib[$i]));
    } else if ($i%2==1) {
      array_push($ans, 'skip');
    } else if ($i%2==0) {
      array_push($ans, ($fib[$i]));
    }
  };
 
  return implode($ans, ' ');
}

?>