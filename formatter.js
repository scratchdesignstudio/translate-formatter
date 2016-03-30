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
  final[lang]['language'] = dropdown.selectedOptions[0].text;

  final[lang]["translator"] = document.getElementById('translator').value.replace(/[\"]/g, "\\\"");
  var unique1 = document.getElementById('unique1').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/><br/>";
  var unique2 = document.getElementById('unique2').value.replace(/[\"]/g, "\\\"") + "<br/>" + "<a href=\"https://scratch.mit.edu/projects/86370044/\">https://scratch.mit.edu/projects/86370044/</a><br/>" + "<a href=\"https://scratch.mit.edu/projects/85132566/\">https://scratch.mit.edu/projects/85132566/</a><br/>" + "<a href=\"https://scratch.mit.edu/projects/85111610/\">https://scratch.mit.edu/projects/85111610/</a><br/><br/>";
  var unique3 = document.getElementById('unique3').value.replace(/[\"]/g, "\\\"") + "<br/>";
  var unique4 = document.getElementById('unique4').value.replace(/[\"]/g, "\\\"") + "<br/>";
  var unique5 = document.getElementById('unique5').value.replace(/[\"]/g, "\\\"") + "<br/>";
  var unique6 = document.getElementById('unique6').value.replace(/[\"]/g, "\\\"") + "<br/>";
  var unique7 = document.getElementById('unique7').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/><br/>";
  var unique8 = document.getElementById('unique8').value.replace(/[\"]/g, "\\\"") + "\n" + "<a href=\"https://scratch.mit.edu/projects/96160058/\">https://scratch.mit.edu/projects/96160058/</a><br/>" + "<br/><br/>";
  final[lang]["unique"] = unique1 + unique2 + unique3 + unique4 + unique5 + unique6 + unique7 + unique8;

  var link = document.getElementById('link').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/>";
  var age = document.getElementById('age').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/>";
  var appropriate = document.getElementById('appropriate').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/>";
  var patience = document.getElementById('patience').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/><br/>";
  var whatIsSDS = document.getElementById('whatIsSDS').value.replace(/[\"]/g, "\\\"") + "\n";
  var selected = " " + document.getElementById('selected').value.replace(/[\"]/g, "\\\"") + " <a href=\"https://scratch.mit.edu/projects/55738732/\">" + "https://scratch.mit.edu/projects/55738732/" + "</a>" + "\n";
  var ask = document.getElementById('ask').value.replace(/[\"]/g, "\\\"") + "\n" + "<br/><br/>";
  var idea = document.getElementById('idea').value.replace(/[\"]/g, "\\\"") + " <a href=\"https://scratch.mit.edu/studios/93627/\">" + "https://scratch.mit.edu/studios/93627/" + "</a>" + "\n" + "<br/><br/>";
  var wiki = document.getElementById('wiki').value.replace(/[\"]/g, "\\\"") + " <a href=\"http://wiki.scratch.mit.edu/wiki/SDS/\">" + "http://wiki.scratch.mit.edu/wiki/SDS/" + "</a>" + "\n" + "<br/><br/>";
  var account = document.getElementById('account').value.replace(/[\"]/g, "\\\"") +  " <a href=\"https://scratch.mit.edu/users/SDS-Updates/\">" + "@SDS-Updates" + "</a>" + "\n" + "<br/><br/>";
  var thumbnail = document.getElementById('thumbnail').value.replace(/[\"]/g, "\\\"");
  final[lang]["standard"] = link + age + appropriate + patience + whatIsSDS + selected + ask + idea + wiki + account + thumbnail;

  var curators = document.getElementById('curatorsp').value.replace(/[\"]/g, "\\\"");
  var result = document.getElementById('result');
  final[lang]["curators"] = curators;

  result.value = JSON.stringify(final,null,2).slice(2,-2) + ",";
  console.log(JSON.stringify(final,null,2).slice(2,-2) + ",");
};

document.onkeyup = render;
