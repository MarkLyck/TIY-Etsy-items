var d = document;

// ANSWER 1
var avgSum = 0;
items.forEach(function(item){
  avgSum = avgSum + item.price;
});

var answer1 = d.querySelector('#answer1');
// Just showing that I know how to use appendChild. And usually I'd go for that.
// But in this case, it's twice the amount of code needed. So I went with shorter solution
var answertext = document.createTextNode('The average price is $' + (avgSum/items.length).toFixed(2));
answer1.appendChild(answertext);
// answer1.textContent = 'The average price is $' + (avgSum/items.length).toFixed(2);

// ANSWER 2
var priceCheck = items.filter(function(item){
  if (item.price >= 14 && item.price <= 18) {
    return true;
  } else {
    return false;
  }
});

var answer2 = d.querySelector('#answer2');
priceCheck.forEach(function(item){
  answer2.innerHTML += item.title + ',</br>';
});

// ANSWER 3
var GBPCodeItems = items.filter(function(item){
  if (item.currency_code === 'GBP') {
    return true;
  }
});

var answer3 = d.querySelector('#answer3');
GBPCodeItems.forEach(function(item){
  answer3.innerHTML += item.title + ' costs £' + item.price + '</br>';
});

// ANSWER 4
var woodenItems = items.filter(function(item){
  if (item.materials.indexOf('wood' !== -1)) {
    return true;
  }
});

var answer4 = d.querySelector('#answer4');
woodenItems.forEach(function(item){
  answer4.innerHTML += item.title + '</br>';
});

// ANSWER 5
var woodenItems = items.filter(function(item){
  if (item.materials.length >= 8) {
    return true;
  }
});

var answer5 = d.querySelector('#answer5');
woodenItems.forEach(function(item){
  answer5.innerHTML += item.title + ' has ' + item.materials.length + ' materials</br>';
  item.materials.forEach(function(material){
    answer5.innerHTML += material + '</br>';
  });
  answer5.innerHTML += '</br>';
});

// ANSWER 6
var madeBySeller = items.filter(function(item){
  if (item.who_made === 'i_did') {
    return true;
  }
});

var answer6 = d.querySelector('#answer6');
answer6.textContent = madeBySeller.length + ' were made by their sellers';




//
