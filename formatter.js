var link, age, appropriate, patience, whatIsSDS, result;
document.onkeyup = function(){
  unique1 = document.getElementById('unique1').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;&lt;br/&gt;";
  unique2 = document.getElementById('unique2').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  unique3 = document.getElementById('unique3').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  unique4 = document.getElementById('unique4').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  unique5 = document.getElementById('unique5').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  unique6 = document.getElementById('unique6').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  unique7 = document.getElementById('unique7').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;&lt;br/&gt;";
  unique8 = document.getElementById('unique8').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;&lt;br/&gt;";
  result = document.getElementById('result');
  result.innerHTML = unique1 + unique2 + unique3 + unique4 + unique5 + unique6 + unique7 + unique8;
  
  link = document.getElementById('link').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  age = document.getElementById('age').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  appropriate = document.getElementById('appropriate').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  patience = document.getElementById('patience').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  whatIsSDS = document.getElementById('whatIsSDS').value.replace(/[\"]/g, "\\\"") + "\\n";
  selected = " " + document.getElementById('selected').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"https://scratch.mit.edu/projects/55738732/\"&gt;" + "https://scratch.mit.edu/projects/55738732/" + "&lt;/a&gt;" + "\\n";
  ask = document.getElementById('ask').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  idea = document.getElementById('idea').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"https://scratch.mit.edu/studios/93627/\"&gt;" + "https://scratch.mit.edu/studios/93627/" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  wiki = document.getElementById('wiki').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"http://wiki.scratch.mit.edu/wiki/SDS/\"&gt;" + "http://wiki.scratch.mit.edu/wiki/SDS/" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  account = document.getElementById('account').value.replace(/[\"]/g, "\\\"") +  " &lt;a href=\"https://scratch.mit.edu/users/SDS-Updates/\"&gt;" + "@SDS-Updates" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  thumbnail = document.getElementById('thumbnail').value.replace(/[\"]/g, "\\\"");
  result2 = document.getElementById('result2');
  result2.innerHTML = link + age + appropriate + patience + whatIsSDS + selected + ask + idea + wiki + account + thumbnail;
};
