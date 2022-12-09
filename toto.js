var total = document.getElementById("total");
var balance = document.getElementById("balance");
var result = document.getElementById("result");
var numbers = document.getElementById("numbers");
var btn = document.getElementById("btn");
btn.onclick = function() {
  if(getNumber(balance) <= 0) {
    alert("Не може да играеш тото! Няма пари! Фалира!");
    return;
  }

  var numArray = numbers.value.split(',');
  var filteredNumArray = [];
  for(var i = 0; i < numArray.length; i++) {
    var num = parseInt(numArray[i]);
    if(!isNaN(num) && num >= 1 && num <= 49 && filteredNumArray.indexOf(num) == -1) {
      filteredNumArray.push(num);
    }
  }

  if(filteredNumArray.length != 6) {
    alert("Wrong input!");
    return;
  }

  balance.textContent = getNumber(balance) - 10;
  total.textContent = getNumber(total) + 10;
  var res = generateToto();
  result.textContent = res.toString();
  var matchCount = 0;

  for(var i = 0; i < numArray.length; i++) {
    if(res.includes(numArray[i])) {
      matchCount++;
    }
  }

  var val = 0;
  switch(matchCount) {
    case 6: val = getNumber(total) * 1.0; break;
    case 5: val = getNumber(total) * 0.7; break;
    case 4: val = getNumber(total) * 0.3; break;
    case 3: val = getNumber(total) * 0.1; break;
  }

  if( matchCount > 3 ) {
    balance.textContent = getNumber(balance) + val;
    total.textContent = getNumber(total) - val;
    result.textContent += "Ти спечели " + val;
  }
}

function getNumber(el) {
  return parseInt(el.textContent);
}

function generateToto() {
  var arr = [];
  do {
    var num = randInt(1, 49);
    if(!arr.includes(num)) {
      arr.push(num);
    }
  }
  while(arr.length < 6)

  return arr;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}