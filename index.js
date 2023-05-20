var myVar;
    
function Loader() {
  myVar = setTimeout(showPage, 50000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader2").style.display = "none";
  document.getElementById("loader3").style.display = "none";
  document.getElementById("loader4").style.display = "none";
  document.getElementById("loader5").style.display = "none";
  document.getElementById("loader6").style.display = "none";
}    
