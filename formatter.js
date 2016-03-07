var link, age, appropriate, patience, whatIsSDS, result;
window.onload = function(){
  link = document.getElementById('link');
  age = document.getElementById('age');
  appropriate = document.getElementById('appropriate');
  patience = document.getElementById('patience');
  whatIsSDS = document.getElementById('whatIsSDS');
  result = document.getElementById('result');
};

document.onkeyup = function(){
  result.innerHTML = link.value + "\\n" + "&lt;br/&gt;" + age.value + "\\n" + "&lt;br/&gt;" + appropriate.value + "\\n" + "&lt;br/&gt;" + patience.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + whatIsSDS.value; 
};
