function updateClock() {
  const now = new Date();

  document.getElementById("day").innerText = now.getDate();
  document.getElementById("month").innerText = now.toLocaleString("default", {
    month: "long",
  });
  document.getElementById("year").innerText = now.getFullYear();
  document.getElementById("hours").innerText = now.getHours();
  document.getElementById("minutes").innerText = now.getMinutes();
  document.getElementById("seconds").innerText = now.getSeconds();
}

updateClock();
setInterval(updateClock, 1000);
