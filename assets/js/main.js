//go back to top function:
//credit: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("myBtn");

//when clicking, scroll to the top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//tab hover effect:
//credit: https://www.w3schools.com/howto/howto_js_hover_tabs.asp
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