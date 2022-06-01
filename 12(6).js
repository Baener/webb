var poly = 7997;
var ylop = 0;
var isPalindrome = false;
var number = poly

var quantity = 0;
var i = 1;
while (poly / i >= 1) {
  quantity ++;
  i *= 10;
}

for (var i = quantity - 1; i >=0; i --) {
  ylop += (poly % 10) * Math.pow(10, i);
  poly = Math.floor(poly / 10);
}

  if (number === ylop) {
  isPalindrome = true;
}