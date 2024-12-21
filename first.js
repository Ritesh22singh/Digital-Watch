// Digiatl clock Program:

function updateClock() {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const mintues = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${mintues}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock(); // Calling updateClock function
