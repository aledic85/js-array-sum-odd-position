function sumOddPosition() {
  var num = [2, 3, 44, 532, 443, 234, 2345, 2232, 85854, 2394, 9449, 389892];
  var odd = [];
  var total = 0;
  for (var i = 1; i < num.length; i = i+2) {
    var numOdd = num[i];
    odd.push (numOdd);
  }
  for (var x = 0; x < odd.length; x++) {
    var sumOdd = odd[x];
    total += sumOdd;
  }
  return total;
}

document.getElementById("data").innerHTML = "La somma dei numeri in posizione dispari è: " + sumOddPosition();
