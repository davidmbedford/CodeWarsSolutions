<!-- A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of 
powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's 
gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) -->

<?php
function hero(int $b, int $d){
 if ($b==0 && $d > 0) {
   return false;
 } else if ($d==0) {
   return true;
 } else {
   return ($b/$d >= 2) ? true : false;
 }
}
?>