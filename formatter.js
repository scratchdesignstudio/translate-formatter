var link, age, appropriate, patience, whatIsSDS, result;
window.onload = function(){
  link = document.getElementById('link');
  age = document.getElementById('age');
  appropriate = document.getElementById('appropriate');
  patience = document.getElementById('patience');
  whatIsSDS = document.getElementById('whatisSDS');
  result = document.getElementById('result');
};

window.onKeyUp = function(){
  result.innerHTML = link.value + "\n" + "<br/>" + age.value + "\n" + "<br/>" + appropriate.value + "\n" + "<br/>" + patience.value + "\n" + "<br/><br/>"; 
};
