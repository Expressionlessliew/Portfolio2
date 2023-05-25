var myVar;

function Loader() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader2").style.display = "none";
  document.getElementById("loader3").style.display = "none";
  document.getElementById("loader4").style.display = "none";
  document.getElementById("loader5").style.display = "none";
  document.getElementById("loader6").style.display = "none";

  // Hide elements with the class name "glowing-text"
  var glowingTextElements = document.querySelectorAll(".glowing-text");
  for (var i = 0; i < glowingTextElements.length; i++) {
    glowingTextElements[i].style.display = "none";
  }

  document.getElementById("mainContent").style.display = "block";
  document.getElementById("L8Y").style.display = "block"; // Show the #L8Y element
  document.getElementById("ABOUT").style.display = "block"; // Show the #L8Y element
  document.getElementById("gmail").style.display = "block"; // Show the #L8Y element
  document.getElementById("time").style.display = "block"; // Show the #L8Y element
  document.getElementById("images").style.display = "block"; // Show the #L8Y element

}
