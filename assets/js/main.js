//code inspred by https://www.w3schools.com/howto/howto_js_hover_tabs.asp
function openTab(evt, tabTitle) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabTitle).style.display = "block";
  evt.currentTarget.className += " active";
}