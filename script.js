
function openPage(evt, option) {
  var i, content, links;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace("active", "");
  }

  document.getElementById(option).style.display = "block";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function myFunction() {
    document.getElementById("myNavBar").classList.toggle("show");
}

// Close the NavBar if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.SideNavButton')) {

    var NavBars = document.getElementsByClassName("NavBar-content");
    var i;
    for (i = 0; i < NavBars.length; i++) {
      var openNavBar = NavBars[i];
      if (openNavBar.classList.contains('show')) {
        openNavBar.classList.remove('show');
      }
    }
  }
}
