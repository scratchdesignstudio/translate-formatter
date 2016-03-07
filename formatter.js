var link, age, appropriate, patience, whatIsSDS, result;
window.onload = function(){
  link = document.getElementById('link');
  age = document.getElementById('age');
  appropriate = document.getElementById('appropriate');
  patience = document.getElementById('patience');
  whatIsSDS = document.getElementById('whatIsSDS');
  selected = document.getElementById('selected');
  ask = document.getElementById('ask');
  idea = document.getElementById('idea');
  wiki = document.getElementById('wiki');
  account = document.getElementById('account');
  thumbnail = document.getElementById('thumbnail');
  result = document.getElementById('result');
};

document.onkeyup = function(){
  result.innerHTML = link.value + "\\n" + "&lt;br/&gt;" + age.value + "\\n" + "&lt;br/&gt;" + appropriate.value + "\\n" + "&lt;br/&gt;" + patience.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + whatIsSDS.value + "\\n" + selected.value + "\\n" + ask.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + idea.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + wiki.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + account.value + "\\n" + "&lt;br/&gt;&lt;br/&gt;" + thumbnail.value; 
};
