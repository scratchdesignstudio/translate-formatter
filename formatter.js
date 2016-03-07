var link, age, appropriate, patience, whatIsSDS, result;
document.onkeyup = function(){
  link = document.getElementById('link').value + "\\n" + "&lt;br/&gt;";
  age = document.getElementById('age').value + "\\n" + "&lt;br/&gt;";
  appropriate = document.getElementById('appropriate').value + "\\n" + "&lt;br/&gt;";
  patience = document.getElementById('patience').value + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  whatIsSDS = document.getElementById('whatIsSDS').value + "\\n";
  selected = document.getElementById('selected').value + " &lt;a href=\"https://scratch.mit.edu/projects/55738732/\"&gt;" + "https://scratch.mit.edu/projects/55738732/" + "&lt;/a&gt;" + "\\n";
  ask = document.getElementById('ask').value + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  idea = document.getElementById('idea').value + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  wiki = document.getElementById('wiki').value + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  account = document.getElementById('account').value + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  thumbnail = document.getElementById('thumbnail').value;
  result = document.getElementById('result');
  result.innerHTML = link + age + appropriate + patience + whatIsSDS + selected + ask + idea + wiki + account + thumbnail + result;
};
