function time() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let session = document.getElementById("session");

  // Convert 24-hour format to 12-hour format
  if (hours === 0) {
      hours = 12;  // Midnight case
  } else if (hours > 12) {
      hours = hours - 12;  // Convert hours greater than 12
  }

  // Add leading zero to minutes and seconds if needed
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Update AM/PM session
  session.innerHTML = (new Date().getHours() >= 12) ? "PM" : "AM";

  // Update the HTML with the new time
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// Update the time every second
setInterval(time, 1000);

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}