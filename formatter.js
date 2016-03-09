var dropdownPrep = function(){
  var dropdown = document.getElementById("lang");
  var option;
  for (var lang in l10n){
    option = document.createElement("option");
    option.innerHTML = lang;
    option.value = l10n[lang];
    dropdown.appendChild(option);
  }
}

var render = function(){
  var results = document.getElementsByClassName('finish');
  for (var i = 0; i < results.length; i++){
    results[i].style.display = 'block';
  }
  var dropdown = document.getElementById("lang");
  var lang = dropdown.value;
  var final = {};
  final[lang] = {};

  final[lang]["translator"] = document.getElementById('translator').value.replace(/[\"]/g, "\\\"");
  var unique1 = document.getElementById('unique1').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var unique2 = document.getElementById('unique2').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;" + "&lt;a href=\"https://scratch.mit.edu/projects/86370044/\"&gt;https://scratch.mit.edu/projects/86370044/&lt;/a&gt;&lt;br/&gt;" + "&lt;a href=\"https://scratch.mit.edu/projects/85132566/\"&gt;https://scratch.mit.edu/projects/85132566/&lt;/a&gt;&lt;br/&gt;" + "&lt;a href=\"https://scratch.mit.edu/projects/85111610/\"&gt;https://scratch.mit.edu/projects/85111610/&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;";
  var unique3 = document.getElementById('unique3').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  var unique4 = document.getElementById('unique4').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  var unique5 = document.getElementById('unique5').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  var unique6 = document.getElementById('unique6').value.replace(/[\"]/g, "\\\"") + "&lt;br/&gt;";
  var unique7 = document.getElementById('unique7').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var unique8 = document.getElementById('unique8').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;a href=\"https://scratch.mit.edu/projects/96160058/\"&gt;https://scratch.mit.edu/projects/96160058/&lt;/a&gt;&lt;br/&gt;" + "&lt;br/&gt;&lt;br/&gt;";
  final[lang]["unique"] = unique1 + unique2 + unique3 + unique4 + unique5 + unique6 + unique7 + unique8;

  var link = document.getElementById('link').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  var age = document.getElementById('age').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  var appropriate = document.getElementById('appropriate').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;";
  var patience = document.getElementById('patience').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var whatIsSDS = document.getElementById('whatIsSDS').value.replace(/[\"]/g, "\\\"") + "\\n";
  var selected = " " + document.getElementById('selected').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"https://scratch.mit.edu/projects/55738732/\"&gt;" + "https://scratch.mit.edu/projects/55738732/" + "&lt;/a&gt;" + "\\n";
  var ask = document.getElementById('ask').value.replace(/[\"]/g, "\\\"") + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var idea = document.getElementById('idea').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"https://scratch.mit.edu/studios/93627/\"&gt;" + "https://scratch.mit.edu/studios/93627/" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var wiki = document.getElementById('wiki').value.replace(/[\"]/g, "\\\"") + " &lt;a href=\"http://wiki.scratch.mit.edu/wiki/SDS/\"&gt;" + "http://wiki.scratch.mit.edu/wiki/SDS/" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var account = document.getElementById('account').value.replace(/[\"]/g, "\\\"") +  " &lt;a href=\"https://scratch.mit.edu/users/SDS-Updates/\"&gt;" + "@SDS-Updates" + "&lt;/a&gt;" + "\\n" + "&lt;br/&gt;&lt;br/&gt;";
  var thumbnail = document.getElementById('thumbnail').value.replace(/[\"]/g, "\\\"");
  final[lang]["standard"] = link + age + appropriate + patience + whatIsSDS + selected + ask + idea + wiki + account + thumbnail;

  var curators = document.getElementById('curatorsp').value.replace(/[\"]/g, "\\\"");
  var result = document.getElementById('result');
  final[lang]["curators"] = curators;

  result.value = JSON.stringify(final,null,2).slice(2,-2);
};

document.onkeyup = render;
